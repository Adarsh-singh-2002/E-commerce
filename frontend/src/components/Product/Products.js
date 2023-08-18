import React, { Fragment, useEffect, useState } from "react";

import "./Products.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { clearErrors,getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard"; 
import { Pagination } from "@mui/material";

const Products = ({match}) => {

    const dispatch = useDispatch();

    const [currentPage,setCurrentPage] = useState(1);
    const {products,loading,productsCount,resultPerPage} = useSelector((state) => state.products);

    const keyword = match.params.keyword;

    const setCurrentPageNo = (e) =>{
        setCurrentPage(e)
    }

    useEffect(() => {
        dispatch(getProduct(keyword,currentPage));
    },[dispatch,keyword,currentPage]);


    return <Fragment>
        {loading?<Loader/>:
        (<Fragment>
            <h2 className="productHeading">Products</h2>

            <div className="products">
                {products && products.map((product)=>(
                    <ProductCard key= {product._id} product = {product}/>
                ))}
            </div>

            {resultPerPage<productsCount &&(
                <div className="paginationBox">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
            )}


        </Fragment>)}
    </Fragment>
};

export default Products;