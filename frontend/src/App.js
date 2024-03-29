import './App.css';
import Header from "./components/layout/Header/Header.js"
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import WebFont from 'webfontloader';
import React from 'react';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/Product/ProductDetails.js';
import Products from "./components/Product/Products.js";
import Search from "./components/Product/Search.js";
import LoginSignUp from './components/User/LoginSignUp';

function App() {

  React.useEffect(() => {

    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    });
  },[]);

  return (
    <Router>
      <Header/>
        <Routes>
          <Route extact path='/' Component={Home}/>
          <Route extact path='/product/:id' Component={ProductDetails}/>
          <Route exact path = "/products" Component={Products}/>
          <Route path = "/products/:keyword" Component={Products}/>
          <Route exact path = "/search" Component={Search}/>
          <Route exact path = "/login" component = {LoginSignUp}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
