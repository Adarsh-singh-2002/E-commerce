import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import Product from "./Product.js"


const product = {
    name:"blue shirt",
    price: "$3000",
    images:[{url:"https://th.bing.com/th/id/OIP.XjC_M4ysO443Iuiy1gt9bgHaJo?pid=ImgDet&w=1153&h=1500&rs=1"}],
    _id:"Adarsh",
}

const Home = () => {
    return(
        <Fragment>
            <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>Find Amazing Products Below</h1>
                <a href="#container">
                    <button>
                        Scroll <CgMouse/>
                    </button>
                </a>
            </div>

            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>


            </div>
        </Fragment>
    );
};

export default Home;