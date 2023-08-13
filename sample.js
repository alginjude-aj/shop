import React from "react"

function Sample(){


    return(
        <div className="hold-transition sidebar-mini">
    <div className="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="/push" role="button">
                        <i className="fas fa-bars"></i>
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="/contact" className="nav-link">Contact</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" data-widget="navbar-search" href="a" role="button">
                        <i className="fas fa-search"></i>
                    </a>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-comments"></i>
                        {/* <span className="badge badge-danger navbar-badge">3</span> */}
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a href="f" className="dropdown-item">
                            <div className="media">
                                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title"> Brad Diesel <span className="float-right text-sm text-danger">
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </h3>
                                    <p className="text-sm">Call me whenever you can...</p>
                                    <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="c" className="dropdown-item">
                            <div className="media">
                                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title"> John Pierce <span className="float-right text-sm text-muted">
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </h3>
                                    <p className="text-sm">I got your message bro</p>
                                    <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="d" className="dropdown-item">
                            <div className="media">
                                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title"> Nora Silvester <span className="float-right text-sm text-warning">
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </h3>
                                    <p className="text-sm">The subject goes here</p>
                                    <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="e" className="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="f">
                        <i className="far fa-bell"></i>
                        {/* <span className="badge badge-warning navbar-badge">15</span> */}
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider"></div>
                        <a href="g" className="dropdown-item">
                            <i className="fas fa-envelope mr-2"></i> 4 new messages <span className="float-right text-muted text-sm">3 mins</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="h" className="dropdown-item">
                            <i className="fas fa-users mr-2"></i> 8 friend requests <span className="float-right text-muted text-sm">12 hours</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="i" className="dropdown-item">
                            <i className="fas fa-file mr-2"></i> 3 new reports <span className="float-right text-muted text-sm">2 days</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="j" className="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="k" role="button">
                        <i className="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="l" role="button">
                        <i className="fas fa-th-large"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" /> */}
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            <div className="sidebar">
                {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex"></div> */}
                {/* <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div> */}
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
                                    <a href="p" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Inactive Page</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="q" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p> Simple Link 
                                    {/* <span className="right badge badge-danger">New</span> */}
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Starter Page</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <a href="r">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Starter Page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                                    <a href="s" className="card-link">Card link</a>
                                    <a href="t" className="card-link">Another link</a>
                                </div>
                            </div>
                            <div className="card card-primary card-outline">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                                    <a href="u" className="card-link">Card link</a>
                                    <a href="v" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-0">Featured</h5>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Special title treatment</h6>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="w" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h5 className="m-0">Featured</h5>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Special title treatment</h6>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="x" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        <aside className="control-sidebar control-sidebar-dark">
            <div className="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>
        <footer className="main-footer">
            <div className="float-right d-none d-sm-inline"> Anything you want </div>
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>. </strong> All rights reserved.
        </footer>
    </div>
</div>
            )
        }

export default Sample;

{/* <hr className="borderTop-1px-solid-#ccc" /> */}
//submit for salespage
const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create an array to store the promises of all the database insertions
    const insertPromises = [];
  
    // Iterate over each row in the salesData array
    salesData.forEach((row) => {
      const { customerId, productId, quantity, price } = row;
      const total = quantity * price;
  
      const requestData = {
        customerId,
        productId,
        quantity,
        price,
        total,
      };
  
      // Create a promise for each database insertion
      const insertPromise = axios.post('http://localhost:3001/api/saleitems', requestData);
      insertPromises.push(insertPromise);
    });
  
    // Execute all the insert promises using Promise.all
    Promise.all(insertPromises)
      .then((responses) => {
        console.log('All data inserted successfully!');
        // Clear the salesData array after successful insertion
        setSalesData([]);
      })
      .catch((error) => {
        console.log('An error occurred while inserting data:', error);
      });
  };
  ///
  const [billId, setBillId] = useState('');
  const generateBillId = () => {
      const now = new Date();
      const day = now.toLocaleDateString('en-US', { weekday: 'short' });
      const month = `0${now.getMonth() + 1}`.slice(-2);
      const date = `0${now.getDate()}`.slice(-2);
      const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    
      return `${day.toLowerCase()}-${month}-${date}-t${randomNum}`;
    };
    useEffect(() => {
      const generatedBillId = generateBillId();
      setBillId(generatedBillId);
    }, []);

    //////
    const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'your-mysql-host',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
  database: 'your-mysql-database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to perform the INSERT operation and get the last inserted ID
function insertAndGetLastId() {
  const query = 'INSERT INTO your_table (column1, column2) VALUES (?, ?); SELECT LAST_INSERT_ID() as id;';
  const values = ['value1', 'value2'];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }

    connection.query(query, values, (error, results) => {
      connection.release(); // Release the connection after the query is executed

      if (error) {
        console.error('Error executing the query: ', error);
        return;
      }

      const lastInsertedId = results[1][0].id;
      console.log('Last inserted ID: ', lastInsertedId);
    });
  });
}

// Call the function to perform the INSERT and get the last inserted ID
insertAndGetLastId();
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     calculateSubtotalAndTotal();
  
//     // Prepare the array of sale items from salesData
//     const saleItems = salesData.map((row) => {
//       const { customerId, productId, quantity, price } = row;
//       const total = quantity * price;
  
//       return {
//         customerId,
//         productId,
//         quantity,
//         price,
//         total,
//       };
//     });
  
//     // Prepare the requestData object with other data
//     const requestData = {
//       ...userInp,
//       billId: generateBillId(),
//       total: totalState,
//       purchaseDate: getCurrentDateTime(),
//       productId: Number(userInp.productId),
//       quantity: Number(userInp.quantity),
//       saleItems: saleItems, // Add the array of sale items to the requestData object
//     };
  
//     console.log(requestData);
  
//     try {
//       const response = await axios.post('http://localhost:3001/api/sales', requestData);
//       console.log("submitted successfully", response);
//       setSalesData([]);
//     } catch (error) {
//       console.error("error submitting", error);
//     }
//   };
  