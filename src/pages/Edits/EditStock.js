import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditStocks() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    id: '',
    product_id: '',
    stock: '',
    stock_price: '',
  });

  useEffect(()=>{
    getStocks(id);
  },[id]);

  const getStocks = (id) => {
    axios
      .get(`http://localhost:3001/api/stocks/${id}`)
      .then((response) => {
        if (response.data.length > 0) {
          const product = response.data[0];
          setEditData({
            id: product.id || '',
            product_id: product.product_id || '',
            stock: product.stock || '',
            stock_price: product.stock_price || '',
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { product_id, stock, stock_price, id} = editData;
    axios
      .put(`http://localhost:3001/api/stocks/${id}`,{
          product_id,
          stock,
          stock_price,
          id,
      } )
      .then((response) => {
        console.log("Product added successfully", response.data);
        console.log(response.data)
      })
      
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
  };
  const handleBack = (e) => {
    e.preventDefault();
    navigate('/stocks');
  }
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
                  <h1>Add Stock</h1>
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
                            value={editData.product_id}
                            placeholder="Enter Product ID"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Stock</label>
                          <input
                            className="form-control"
                            id="stock"
                            name="stock"
                            value={editData.stock}
                            placeholder="Enter No.of.Stock"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    
                  
                    <div className="col-12 col-sm-4">
                      <div className="form-group">
                        <label>Stock Price</label>
                        <input
                          className="form-control"
                          id="stock_price"
                          name="stock_price"
                          value={editData.stock_price}
                          onChange={handleChange}
                          placeholder="Enter stock Price"
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
                      className="btn btn-primary bg-blue w-auto mr-1" onClick={handleBack}>
                        
                      Back
                    </button>
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

export default EditStocks;
