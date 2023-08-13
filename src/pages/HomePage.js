import React from "react";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <Navbar />
        <Sidebar />

        {/* Main content */}
        <div className="content-wrapper">
          {/* Content */}
          <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Products</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Products</li>
                    </ol>
                </div>
                </div>
            </div>
            
            </section>

            {/* <!-- Main content --> */}
            <section className="content">

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
                            <th  className="text-center">Status</th>
                            <th ></th>
                        </tr>
                    </thead>
                    {/* <tbody>
                       {data.map((row)=>{
                        return(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.sku} </td>
                            <td>{row.price}</td>
                        </tr>
                        )
                       })}
                    </tbody> */}
                </table>
                </div>
                {/* <!-- /.card-body --> */}
            </div>
            {/* <!-- /.card --> */}

            </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
