import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Products(){
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios
            .get('http://localhost:3001/api/products')
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching Data:', error);
            });
    };
    useEffect(() =>{
        fetchData();
        
    }, []);

    const handleEdit = (id) =>{
        navigate(`/edit/${id}`)
    }
   

    return(
        <div className="container-flex">
        <div className="wrapper">
            <Navbar />
            <Sidebar />
        <div className="wrapper">
        <div className="content-wrapper">
            

             {/* Main content  */}
            <section className="content mt-3">

            {/* <!-- Default box --> */}
            <div className="card">
                <div className="card-header">
                <h3 className="card-title">Products</h3>

                {/* <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                    <i className="fas fa-times"></i>
                    </button>
                </div> */}
                </div>
                <div className="card-body p-0">
                <table className="table table-striped projects">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th >Product Name</th>
                            <th > SKB </th>
                            <th>Price</th>
                            <th  className="text-center">Actions</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                       {data.map((row)=>{
                        return(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.sku} </td>
                            <td>{row.price}</td>
                            <td className="d-flex justify-content-center">
                                <button type="submit" className="btn bg-blue btn-outline-dark w-auto"
                                    onClick={() => handleEdit(row.id)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                        )
                       })}
                    </tbody>
                </table>
                </div>
                {/* <!-- /.card-body --> */}
            </div>
            {/* <!-- /.card --> */}

            </section>
            {/* <!-- /.content --> */}
        </div>
        </div>
        
     </div>
     <Footer />
     </div>
    )
}

export default Products;


