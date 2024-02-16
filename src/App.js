import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import Medicine from './Medicine';
import LabTest from './LabTest';
import StoreLocator from './StoreLocator';
import CompareMedicine from './CompareMedicine';
import './App.css';
import logoPath from './medkart-logo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartin from './Cartin';
import LogIn from './LogIn';
import SignUp from './SignUp';


function App() {
 

  
  return (
    <div className="App">
      <header>
        <div className="block-search"> 
         
          <div className="logo">
            {/* Display Logo */}
            <img src={logoPath} alt="Netmeds Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Medicines & Healthcare Products" />
          </div>
          <div className='icons'>
            {/* Style for Icons Container */}
            <div className='language_container'>
                <span>En</span>
            </div>
            <div className='sign_in_container'>   
            <NavLink className="normal-text" to="/Cartin">Cart</NavLink>
            </div>
            <div className='cart_container'> 
            <NavLink className="normal-text"  to="/LogIn">Login</NavLink>
            
            </div>
            <div className='sign_in_container'>
            <NavLink className="normal-text"  to="/SignUp">Sign Up</NavLink>
            
            </div>
          </div>
          
        </div>
        
      </header>
      <div className="navbar-container">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto"> 
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Medicine">Medicine</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/LabTest">Lab Test</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/StoreLocator">Store Locator</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/CompareMedicine">Compare Medicine</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        <div className="row">
          <div className="col-120 fetivel-offer">
            Hello, we have changed the minimum order value from ₹300 to ₹200. Place your order now!
          </div>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Medicine" element={<Medicine />} />
          <Route path="/LabTest" element={<LabTest />} />
          <Route path="/StoreLocator" element={<StoreLocator />} />
          <Route path="/CompareMedicine" element={<CompareMedicine />} />
          <Route path="/Cartin" element={<Cartin />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
         
      
  <footer>
    <div class="footer0">
      <h1>Medical Pharmacy</h1>
    </div>
    <div class="footer1 ">
      Connect with us at<div class="social-media">
        <a href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </div>
    </div>
    <div class="footer2">
      <div class="product">
        <div class="heading">Products</div>
        <div class="div">Sell your Products</div>
        <div class="div">Advertise</div>
        <div class="div">Pricing</div>
        <div class="div">Product Buisness</div>

      </div>
      <div class="services">
        <div class="heading">Services</div>
        <div class="div">Return</div>
        <div class="div">Cash Back</div>
        <div class="div">Affiliate Marketing</div>
        <div class="div">Others</div>
      </div>
      <div class="Company">
        <div class="heading">Company</div>
        <div class="div">Complaint</div>
        <div class="div">Careers</div>
        <div class="div">Affiliate Marketing</div>
        <div class="div">Support</div>
      </div>
      <div class="Get Help">
        <div class="heading">Get Help</div>
        <div class="div">Help Center</div>
        <div class="div">Privacy Policy</div>
        <div class="div">Terms</div>
        <div class="div">Login</div>
      </div>
    </div>
    <div class="footer3">Copyright © <h4>Medkart Pharmacy</h4> 2021-2028</div>
  </footer>
  
        
    </div>
    
  );
}

export default App;
