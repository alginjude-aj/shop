import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import axios from "axios";

function AddStock() {
  const [userInp, setUserInp] = useState({
    id: '',
    product_id: '',
    stock:'',
    stock_price:'',
  });

  const handleChange = (e) => {
    setUserInp({ ...userInp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/stocks", userInp)
      .then((response) => {
        console.log("Product added successfully", response.data);
        console.log(response.data)
      })
      
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
  };

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-4">
                  <h1>Add Stocks</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="container-fluid">
              <div className="card card-default">
                <div className="card-body">
                  
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Product Id</label>
                          <input
                            className="form-control"
                            id="product_id"
                            name="product_id"
                            value={userInp.product_id}
                            placeholder="Enter ProductId"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Unique identity (sku)</label>
                          <input
                            className="form-control"
                            id="stock"
                            name="stock"
                            value={userInp.stock}
                            placeholder=" No.Of.Stocks"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    
                  
                    <div className="col-12 col-sm-4">
                      <div className="form-group">
                        <label>Product Price</label>
                        <input
                          className="form-control"
                          id="stock_price"
                          name="stock_price"
                          value={userInp.stock_price}
                          onChange={handleChange}
                          placeholder="Enter Price"
                        />
                      </div>
                      </div>

                    {/* <div className="col-12 col-sm-6">
                      <div className="form-group ">
                        <button
                          className="form-control bg-blue mt-5"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div> */}
                  </div>
                  <div className="card-footer d-flex justify-content-center">
                    <button 
                    type="submit" 
                    className="btn btn-primary bg-blue w-auto"
                    onClick={handleSubmit}
                    >Submit</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AddStock;
