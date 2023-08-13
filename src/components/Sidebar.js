import React, { useState } from "react"

function Sidebar(){
    const [activeOption, setActiveOption] = useState(null);

    const handleOptionClick = (option) => {
      setActiveOption(activeOption === option ? null : option);
    };
  

    return(
    
        <aside className="main-sidebar sidebar-dark-primary elevation-4 position-fixed">
            <a href="index3.html" className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />  */}
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open">
                            {/* <a href="n" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p> Starter Pages <i className="right fas fa-angle-left"></i>
                                </p>
                            </a> */}
                            <ul className="nav nav-treeview">
                                {/* <li className="nav-item">
                                    <a href="o" className="nav-link active">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Active Page</p>
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a href="products" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Product List</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="add" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p> Add Products
                                    {/* <span className="right badge badge-danger">New</span> */}
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="stocks" className="nav-link">
                                <i className="nav-icon fa fa-bars"></i>
                                <p> Stock List
                                    {/* <span className="right badge badge-danger">New</span> */}
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/sales" className="nav-link">
                                <i className="nav-icon fas fa-bars"></i>
                                <p> sale
                                    {/* <span className="right badge badge-danger">New</span> */}
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/cus" className="nav-link">
                                <i className="nav-icon fas fa-bars"></i>
                                <p> Registered Customer
                                    {/* <span className="right badge badge-danger">New</span> */}
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${activeOption === 'layout' ? 'active' : ''}`} onClick={() => handleOptionClick('layout')}>
                            <i className="nav-icon fas fa-copy"></i>
                            <p>
                                Customer Center
                                <i className={`fas fa-angle-left right ${activeOption === 'layout' ? 'rotate' : ''}`}></i>
                                {/* <span className="badge badge-info right">6</span> */}
                            </p>
                            </a>
                            <ul className={`nav nav-treeview ${activeOption === 'layout' ? 'd-block' : 'd-none'}`}>
                            <li className="nav-item">
                                <a href="/cus" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Registered Customer</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Add Customer</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        
   

            )
        }

export default Sidebar;