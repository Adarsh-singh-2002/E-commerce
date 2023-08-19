import React, { Fragment,useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import Product from "./ProductCard"
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader";


const Home = () => {
    const dispatch = useDispatch();
    const {loading, products} = useSelector(state=>state.products);

    useEffect(() => {
        dispatch(getProduct());

    },[dispatch]);
    return(
        <Fragment>
            {loading?(<Loader/>) : (
                <Fragment>
                    <MetaData title="PRODUCTS -- ECOMMERCE" />
                <MetaData title = "E-Commerce"/>
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
                    {products && products.map((product)=> <Product product={product}/>)}
                </div>
            </Fragment>
            )}
        </Fragment>
    );
};

export default Home;