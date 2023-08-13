import './App.css';
import Login from './Auth/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Auth/Signup';
import PrivateRoute from './PrivateRoute';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import StockList from './pages/StockPage';
import EditProduct from './pages/Edits/EditProducts';
import EditStocks from './pages/Edits/EditStock';
import SalesPage from './pages/Sales/SalesPage';
import Bill from './pages/Sales/Bill';
import RegesteredCustomer from './pages/Customer/RegisteredCustomer';
import HomePage from './pages/HomePage';
import PurchasedList from './pages/Customer/PurchasedList';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />  
            <Route path="/products" element={<Products />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/stocks" element={<StockList />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/editstocks/:id" element={<EditStocks />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/sales/:billNumber" element={<Bill />} />
            <Route path="/cus" element={<RegesteredCustomer />} />
            <Route path="/cus/:customerId" element={<PurchasedList />} />
            
          </Route>
        </Routes>
      </Router>
    </>



    // <div className="App">
    //   <Router>
    //     <Sidebar />
    //     <Header />
    //     <div className="content">
    //       <Routes>
    //         <Route path="login" element={<Login />} />
    //         <Route path="signup" element={<Signup />} />
    //         <Route element={<PrivateRoute />}>
    //           <Route path="home" element={<HomePage />} />
    //         </Route>
    //       </Routes>
    //     </div>
    //   </Router>
    // </div>

    // <div className="App">
    //   <Router>
    //       <Routes>
    //         <Route path='login' element={<Login />} />
    //         <Route path='signup' element={ <Signup />} />
    //         <Route element={<PrivateRoute />} >
    //           <Route path='home' element={<HomePage />}/>
    //         </Route>
    //       </Routes>
    //   </Router>
    // </div>
  );
}

export default App;
