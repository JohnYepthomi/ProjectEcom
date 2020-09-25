import React from 'react';
import {Link} from 'react-router-dom';



export default function Navbar ({testc}) {
  return (
    <nav className=" navbar
    navbar-expand-sm  px-sm-5">
      <Link to="/" className="">
      <i className="fab fa-airbnb">Airbnb</i>
      
      </Link>

      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
         <Link to="/" className="nav-link"> PRODUCTS</Link>
        </li>
      </ul>

      <Link to="/cart" className="ml-auto"> <i className="fas fa-shopping-cart"></i>  </Link>
    </nav>
  );
}
