import React, { useEffect, useState } from "react";
import Pic from '../../dist/img/avatar5.png';
import axios from "axios";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {  useNavigate } from "react-router-dom";


function RegesteredCustomer() {
    const navigate = useNavigate();
    const [ customer, setCustomer] = useState([]);
    const getCustomers = () => {
        axios.get('http://localhost:3001/api/customers/all')
        .then((response) => {
            setCustomer(response.data);
        })
        .catch((error) => {
            console.log('Error fetching Data:', error);
        });
    };
    useEffect(() =>{
        getCustomers();
    }, []);

    const handleView = (id) => {
        navigate(`/cus/${id}`);   
    }

    return (

            <div className="container-fluid">
                <div className="content-wrapper min-vh-100">
                <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>Customers</h1>
                    </div>
                    <div className="col-sm-6">
                        
                    </div>
                    </div>
                </div>
                </section>
        
                <section className="content">
            
                <div className="card">
                    <div className="card-body p-0">
                    <table className="table table-striped projects">
                        <thead>
                            <tr>
                                <th >
                                    #
                                </th>
                                <th >
                                    Customer
                                </th>
                                <th >
                                    Phone
                                </th>
                                <th >
                                    Address
                                </th>
                                <th>
                                    Email
                                </th>
                                <th className=" w-25">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.map((row) => (
                                <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>
                                <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <img alt="Avatar" className="table-avatar" src={Pic}/>
                                            {row.name}
                                        </li>
                                    </ul>
                                </td>
                                <td>{row.mobile}</td>
                                <td>{row.address}</td>
                                <td>{row.email}</td>
                                <td className=" d-flex ">
                                    <button className="btn btn-primary btn-sm w-auto mr-2"
                                    onClick={()=>handleView(row.id)}>
                                        <i className="fas fa-folder"></i>
                                        View
                                    </button>
                                    <button className="btn btn-info btn-sm w-auto mr-2" >
                                        <i className="fas fa-pencil-alt"></i>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger btn-sm w-auto" >
                                        <i className="fas fa-trash"></i>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            ) )}
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            
                </section>
        </div>
            </div>

        
    )
}

export default RegesteredCustomer;




