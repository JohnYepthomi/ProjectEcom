import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Product from './Product'
import Details from './Details'
import Cart from './Cart'
import Default from './Default'
import {Switch,Route} from 'react-router-dom'

export default function App() {
  return (
    <React.Fragment>
     <Navbar/>
     <Switch>
      <Route exact path="/"  component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      
     </Switch>
    </React.Fragment>
  );
}