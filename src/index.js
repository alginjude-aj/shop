import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/adminlte.css";
import "./css/all.min.css";
import './index.css';
import App from './App';
import Navbar from './components/Navbar';

import reportWebVitals from './reportWebVitals';
import Sidebar from './components/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="hold-transition sidebar-mini">
    <div className="wrapper min-vh-100">
      <Navbar />
      <Sidebar />
    <App />
    </div>
    {/* Footer */}
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
