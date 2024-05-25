import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


//React Router
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
//


import MenuTop from './Menu/menu';

import EmployeeList from './EmployeeList';


const Layout =() =>{
  return (
      <>
        <MenuTop></MenuTop>
        <div id="wrapper">
          <div id="content-wrapper">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12" >
                          <Outlet />
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </>
  );
}



const App =() => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Empty</div> } />
          <Route path="Masters/EmployeeList" element={<EmployeeList />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
