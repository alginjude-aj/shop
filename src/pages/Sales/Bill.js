import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Bill() {
  const { billNumber } = useParams();
  const [billData, setBillData] = useState(null); // State to store the fetched bill data

  useEffect(() => {
    getBillData(billNumber);
  }, [billNumber]);

  const getBillData = (billNumber) => {
    axios
      .get(`http://localhost:3001/api/saleitems/${billNumber}`)
      .then((response) => {
        if (response.data) {
          // Store the fetched bill data in the component state
          setBillData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setBillData([]);
      });
  };
  console.log(billData);

  const discount = 0;
  // const total = subtotal - discount;

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
                    <h1>Invoice</h1>
                  </div>
                  
                </div>
              </div>
            </section>

            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    

                    <div className="invoice p-3 mb-3">
                      <div className="row">
                        <div className="col-12">
                          <h4>
                            <i className="fas fa-globe"></i> AdminLTE, Inc.
                            <small className="float-right">
                              Date: 2/10/2014
                            </small>
                          </h4>
                        </div>
                      </div>
                      <div className="row invoice-info mt-5 mb-5">
                        <div className="col-sm-4 invoice-col">
                          {billData && billData[0] ? (
                            <>
                              Customer Name:
                              <span className="ml-2">
                                <b>{billData[0].customerName}</b>
                              </span>
                            </>
                          ) : (
                            <p>Loading...</p>
                          )}
                        </div>

                        <div className="col-sm-4 offset-4 invoice-col">
                          Bill-Number: <b>#{billNumber}</b>
                          <br />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 table-responsive">
                          {billData && billData.length > 0 ? (
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Product Name</th>
                                  <th>Price</th>
                                  <th>Quantity</th>
                                  <th>Total Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {billData.map((item, index) => (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.unit}</td>
                                    <td>{item.total}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p>No data available.</p>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6">
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                              {billData && billData[0] && (
                                <tr>
                                  <th>Sale Total:</th>
                                  <td>
                                    {parseFloat(billData[0].saleTotal).toFixed(
                                      2
                                    )}
                                  </td>
                                </tr>
                              )}

                              <tr>
                                <th>Discount:</th>
                                <td>{discount}</td>
                              </tr>
                              {billData && billData[0] && (
                                <tr>
                                  <th>Total:</th>
                                  <td>
                                    {parseFloat(billData[0].saleTotal).toFixed(
                                      2
                                    )}
                                  </td>
                                </tr>
                              )}
                              </tbody>
                              
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row no-print">
                        <div className="col-12">
                          <a
                            href="print.js"
                            rel="noopener"
                            target="_blank"
                            className="btn btn-default"
                          >
                            <i className="fas fa-print"></i> Print
                          </a>
                          <button
                            type="button"
                            className="btn btn-success d-flex w-auto float-right"
                          >
                            <i className="far fa-credit-card"></i> Submit
                            Payment
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary d-flex w-auto float-right mr-2"
                          >
                            <i className="fas fa-download"></i> Generate PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
