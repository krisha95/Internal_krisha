import React from "react";
import Product_Grid from "./grid/Product_Grid";
import ProductList from "./list/ProductList";
import ProductDetails from "./detail/ProductDetails";
import ProductEdit from "./edit/ProductEdit";
import ProductCreate from "./create/ProductCreate";

const page = () => {
  return (
    // <div className="wrapper">
    <>
      {/* <div className="container-xxl"> */}
      {/* <Product_Grid /> */}
      {/* </div> */}
      {/* <ProductList /> */}
      {/* <ProductDetails /> */}
      {/* <ProductEdit/> */}
      <ProductCreate />
    </>
  );
};

export default page;
