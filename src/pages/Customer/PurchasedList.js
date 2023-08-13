import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";


function PurchasedList(){
  const [showModal, setShowModal] = useState(false);
  const [ selectedItem, setSelectedItem] = useState(null);
  const handlePayBillClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  
  
  const {customerId} = useParams();
  const [ data , setData ] = useState([]);
    const getSingleCusSales = (customerId) =>{
      axios.get(`http://localhost:3001/api/sales/${customerId}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
    })
    .catch((error) => {
        console.log('Error fetching Data:', error);
    });
    }
    useEffect(() => {
      getSingleCusSales(customerId);
    }, [customerId]);

    const BillModal = ({selectedItem}) => {
        console.log(selectedItem)
        const [ userInp, setUserInp ] = useState({
            amount: "",
        });

      return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: showModal ? "block" : "none" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Pay Bill</h5>
                <button type="button" className="close w-auto" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                    <td>Bill Number</td>
                    <td>Bill Date</td>
                    <td>Bill Total</td>
                    <td>Paid Amount</td>
                    <td>Balance Amount</td>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItem && (
                        <tr>
                        <td>{selectedItem.billNumber}</td>
                        <td>{selectedItem.billDate}</td>
                        <td>{selectedItem.saleTotal}</td>
                        <td></td>
                        <td></td>
                        
                          <td>
                            <input 
                                type="number"
                                className="form-control" 
                                placeholder="enter amount"
                                name="amount"
                                value={userInp.amount}
                                onChange={(e) => setUserInp(e.target.value)}
                                ></input>
                          </td>

                        </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <div className="d-flex">
                  <button className="btn btn-secondary btn-sm w-auto mr-1" data-dismiss="modal" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  <button type="button" className="btn btn-primary btn-sm w-auto">
                    Save changes
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      );
    };

    return(
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
                            <h1>Purchase History</h1>
                          </div>
                          
                        </div>
                      </div>
                    </section>
        
                    <section className="content">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-12">
                            
        
                            <div className="invoice p-3 mb-3">
                              
                              <div className="row invoice-info mt-5 mb-5">
                                <div className="col-sm-4 invoice-col">
                                  {data && data[0] ? (
                                    <>
                                      Customer Name:
                                      <span className="ml-2">
                                        <b>{data[0].customerName}</b>
                                      </span>
                                    </>
                                  ) : (
                                    <p>Loading...</p>
                                  )}
                                </div>
        
                                
                              </div>
        
                              <div className="row">
                                <div className="col-12 table-responsive">
                                  {data && data.length > 0 ? (
                                    <table className="table table-striped">
                                      <thead>
                                        <tr>
                                          <th>#</th>
                                          <th>Bill Number</th>
                                          <th>Bill Date</th>
                                          <th>Bill Total</th>
                                          <th>Action</th>
                                          
                                          
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {data.map((item, index) => (
                                          <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.billNumber}</td>
                                            <td>{item.billDate}</td>
                                            <td>{item.saleTotal}</td>
                                            <td>
                                            <button className="btn btn-info btn-sm w-auto"
                                            onClick={() => handlePayBillClick(item)}>
                                                <i className="fas fa-pencil-alt mr-1"></i>
                                                Pay Bill
                                            </button>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                    
                                  ) : (
                                    <p>No data available.</p>
                                  )}
                                  <BillModal selectedItem={selectedItem} />
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
          
    )
}
export default PurchasedList;