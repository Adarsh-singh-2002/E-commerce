import './App.css';
import Header from "./component/layout/Header.js"
import { BrowserRouter as Router } from "react-router-dom";
import webFont from "webfontloader";
import React from 'react';
import WebFont from 'webfontloader';


React.useEffect(() => {

  WebFont.load({
    google:{
      families:["Roboto","Droid Sans","Chilanka"]
    }
  })


}, [])
function App() {
  return (<Router>
      <Header/>
    </Router>);

}

export default App;
