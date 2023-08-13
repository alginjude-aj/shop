import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function StockList(){
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios
            .get('http://localhost:3001/api/stocks')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log('Error fetching Data:', error);
            });
    };
    useEffect(() =>{
        fetchData();
    }, []);

    const handleUpdate = (id) =>{
        navigate(`/editstocks/${id}`)
    }
   

    return(
        <div className="container-flex">
        <div className="wrapper">
            <Navbar />
            <Sidebar />
        <div className="wrapper">
        <div className="content-wrapper">
            

            {/* <!-- Main content --> */}
            <section className="content mt-3">

            {/* <!-- Default box --> */}
            <div className="card">
                <div className="card-header">
                <h3 className="card-title">Stocks</h3>
                </div>
                <div className="card-body p-0">
                <table className="table table-striped projects">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Id</th>
                            <th>Stock</th>
                            <th>Stock Price</th>
                            {/* <th  className="text-center">Actions</th> */}
                            
                        </tr>
                    </thead>
                    <tbody>
                       {data.map((row)=>{
                        return(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.product_id}</td>
                            <td>{row.stock} </td>
                            <td>{row.stock_price}</td>
                            <td className="d-flex justify-content-center">
                                <button type="submit" className="btn bg-blue btn-outline-dark w-auto"
                                    onClick={()=> handleUpdate(row.id)}
                                >
                                    update Stock
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
        <Footer />
     </div>
     </div>
    )
}

export default StockList;


