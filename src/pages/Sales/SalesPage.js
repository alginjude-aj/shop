import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import axios from "axios";
import Select from "react-select";
import { fetchCustomers } from "../../service/CustomerService";
import { fetchProducts } from "../../service/ProductService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function SalesPage() {
    const generateBillId = () => {
        const now = new Date();
        const year = `${now.getFullYear()}`
        const month = `0${now.getMonth() + 1}`.slice(-2);
        const date = `0${now.getDate()}`.slice(-2);
        const randomNum = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(7, "0");

        return `${year}${month}${date}-${randomNum}`;
    };
    const getCurrentDateTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const [subtotalState, setSubtotalState] = useState(0);
    const [totalState, setTotalState] = useState(0);

    const [product, setProduct] = useState({
        selectedProduct: {},
        resultProduct: [],
    });
    const [customer, setCustomer] = useState({
        selectedCustomer: {},
        resultCustomer: [],
    });
    const [userInp, setUserInp] = useState({
        customerId: "",
        customerName: "",
        productId: "",
        productName: "",
        quantity: "",
        price: "",
        discount: "",
        total: "",
    });

    const onCustomerChange = (data) => {
        if (data !== null) {
        setCustomer({
            ...customer,
            selectedCustomer: { value: data.id, label: data.label },
        });

        setUserInp({
            ...userInp,
            customerId: data.id,
            customerName: data.label,
        });
        } else {
        setCustomer({
            ...customer,
            selectedCustomer: {},
        });
        }
    };
    const onProductChange = (data) => {
        if (data !== null) {
        setProduct({
            ...product,
            selectedProduct: {
            value: data.id,
            label: data.label,
            price: data.price,
            },
        });

        setUserInp({
            ...userInp,
            productId: data.id,
            productName: data.label,
            price: data.price,
        });
        } else {
        setProduct({
            ...product,
            selectedProduct: {},
        });
        }
    };
    let typingTimer,
        doneTypingInterval = 800;
    const onCustomerSearch = (input) => {
        if (input.length > 0) {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneCustomerTyping, doneTypingInterval, input);
        }
    };
    const doneCustomerTyping = (val) => {
        fetchCustomers({ q: val })
        .then((data) => {
            if (data.length > 0) {
            setCustomer({
                ...customer,
                resultCustomer: data,
            });
            } else {
            setCustomer({
                ...customer,
                resultCustomer: [],
                setCustomer: null,
            });
            }
        })
        .catch((error) => {
            console.log("An error occurred", error);
        });
    };
    const onProductSearch = (input) => {
        if (input.length > 0) {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneProductTyping, doneTypingInterval, input);
        }
    };
    const doneProductTyping = (val) => {
        fetchProducts({ q: val })
        .then((data) => {
            if (data.length > 0) {
            setProduct({
                ...product,
                resultProduct: data,
            });
            } else {
            setProduct({
                ...product,
                resultProduct: [],
                selectedProduct: null,
            });
            }
        })
        .catch((error) => {
            console.log("An error occurred", error);
        });
    };

    const [salesData, setSalesData] = useState([]);
    const addToBill = (e) => {
        e.preventDefault();
        const updatedSalesData = [...salesData, userInp];
        setSalesData(updatedSalesData);
        console.log(updatedSalesData);
        setUserInp({
        customerId: userInp.customerId,
        productId: "",
        quantity: "",
        price: "",
        discount: "",
        });
        setProduct({
        ...product,
        selectedProduct: {},
        });
        calculateSubtotalAndTotal(updatedSalesData);
    };
    const calculateSubtotalAndTotal = () => {
        let subtotal = 0;
        salesData.forEach((row) => {
        const quantity = parseFloat(row.quantity) || 0;
        const price = parseFloat(row.price) || 0;
        subtotal += quantity * price;
        });

        const total = subtotal - userInp.discount;
        setSubtotalState(subtotal);
        setTotalState(total);
    };
    useEffect(() => {
        calculateSubtotalAndTotal();
    }, [salesData, userInp.discount]);

    const handleDelete = (index) => {
        const updatedSalesData = [...salesData];
        updatedSalesData.splice(index, 1);
        setSalesData(updatedSalesData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        calculateSubtotalAndTotal();

        const saleItems = salesData.map((row) => {
        const { customerId, productId, quantity, price } = row;
        const total = quantity * price;

        return {
            customerId,
            productId,
            quantity,
            price,
            total,
        };
        });

        const requestData = {
        ...userInp,
        billNumber: generateBillId(),
        total: totalState,
        purchaseDate: getCurrentDateTime(),
        saleItems: saleItems, // Add the array of sale items to the requestData object
        };
        console.log(requestData)
        try {
        const response = await axios.post("http://localhost:3001/api/sales", requestData);
        console.log("submitted successfully", response);
        setSalesData([]);
        } catch (error) {
        console.error("error submitting", error);
        }
    };
    
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper min-vh-100">
        <Navbar />
        <Sidebar />
        <div className="container-fluid">
          <div className="content-wrapper bg-white">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Sales</h1>
                  </div>
                </div>
              </div>
            </section>
            <div className="row">
              <section className="content col-sm-7">
                <div className="card">
                  <div className="card-body d-flex p-3 align-item-center">
                    <label className="d-flex align-item-center mr-2">
                      Customer Name:
                    </label>
                    <span>
                      {salesData.length > 0 ? salesData[0].customerName : ""}
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-3 d-flex justify-content-between ">
                    <h3 className="card-title">Products</h3>
                    <button
                      className="btn btn-success w-auto ml-auto"
                      onClick={handleSubmit}
                    >
                      Create Bill
                    </button>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-borderless projects">
                      <thead>
                        <tr>
                          <th>product</th>
                          <th> Quantity </th>
                          <th> Price </th>
                          <th>Total Price</th>
                          <th className="pr-0">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {salesData.map((row, index) => (
                          <tr key={index}>
                            <td>{row.productName}</td>
                            <td>{row.quantity}</td>
                            <td>{row.price}</td>
                            <td>{row.price * row.quantity}</td>
                            <td className="gridcell p-0 d-flex justify-content-center">
                              <button
                                className="btn btn-danger d-flex justify-content-center w-50"
                                onClick={() => handleDelete(index)}
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </button>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td colSpan={3} className="text-right">
                            Sub Total:
                          </td>
                          <td>{subtotalState}</td>
                        </tr>
                        <tr>
                          <td colSpan={3} className="text-right">
                            Discount:
                          </td>
                          <td className="gridcell w-25">
                            <input
                              className="w-25"
                              type="number"
                              value={userInp.discount}
                              onChange={(e) =>
                                setUserInp({
                                  ...userInp,
                                  discount: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3} className="text-right">
                            Total:
                          </td>
                          <td>{totalState}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="Content col-sm-5">
                <div className="card card-default">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Customer Name</label>
                          <Select
                            isSearchable
                            isClearable={true}
                            onChange={onCustomerChange}
                            onInputChange={onCustomerSearch}
                            options={customer.resultCustomer}
                            value={customer.selectedCustomer}
                          />
                        </div>
                        <hr className="ruled border-1px-solid-red" />
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Product Name</label>
                          <Select
                            isSearchable
                            isClearable={true}
                            onChange={onProductChange}
                            onInputChange={onProductSearch}
                            options={product.resultProduct}
                            value={product.selectedProduct}
                          />
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Price</label>
                              <input
                                type="number"
                                className="form-control"
                                value={userInp.price}
                                onChange={(e) =>
                                  setUserInp({
                                    ...userInp,
                                    price: e.target.value,
                                  })
                                }
                              ></input>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Quantity</label>
                              <input
                                type="number"
                                className="form-control"
                                value={userInp.quantity}
                                onChange={(e) =>
                                  setUserInp({
                                    ...userInp,
                                    quantity: e.target.value,
                                  })
                                }
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid mt-2">
                        <button className="btn bg-blue" onClick={addToBill}>
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SalesPage;
