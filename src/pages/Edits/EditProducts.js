import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    id: '',
    name: '',
    sku:'',
    price:'',
  });

  useEffect(() => {
    getProduct(id);
  }, [id]);

  const getProduct = (id) => {
    axios
      .get(`http://localhost:3001/api/products/${id}`)
      .then((response) => {
        if (response.data.length > 0) {
          const product = response.data[0];

          setEditData({
            id: product.id || '',
            name: product.name || '',
            sku: product.sku || '',
            price: product.price || '',
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const { name, sku, price, id } = editData;

    axios
      .put(`http://localhost:3001/api/products/${id}`, {
        name,
        sku,
        price,
        id,
      })
      .then((response) => {
        console.log("Product updated successfully", response.data);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };
  const handleBack = (e) => {
    e.preventDefault();
    navigate('/products');
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
                  <h1>Edit Product</h1>
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
                        <label>Product Name</label>
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          value={editData.name}
                          placeholder="Enter Product Name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Unique identity (sku)</label>
                        <input
                          className="form-control"
                          id="sku"
                          name="sku"
                          value={editData.sku}
                          placeholder="Enter Unique identity"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group">
                        <label>Product Price</label>
                        <input
                          className="form-control"
                          id="price"
                          name="price"
                          value={editData.price}
                          onChange={handleChange}
                          placeholder="Enter Price"
                        />
                      </div>
                    </div>
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
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    
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

export default EditProduct;
