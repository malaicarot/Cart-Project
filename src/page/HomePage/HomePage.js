import React, { useContext } from "react";
import "./HomePage.css";
import { ShopContext } from "../../context/ShopContext";
import Product from "./Product";

const HomePage = () => {
  const { cartList, filterItem, sortItems } = useContext(ShopContext);
  const dataLength = cartList.length;
  return (
    <div>
      <h1>PAK Shop</h1>
      <div className="filterBySize">
        <button onClick={() => filterItem (sortItems)}>XS</button>
        <button onClick={() => filterItem (sortItems)}>S</button>
        <button onClick={() => filterItem (sortItems)}>M</button>
        <button onClick={() => filterItem (sortItems)}>ML</button>
        <button onClick={() => filterItem (sortItems)}>L</button>
        <button onClick={() => filterItem (sortItems)}>XL</button>
        <button onClick={() => filterItem (sortItems)}>XXL</button>
      </div>
      <div>{dataLength}Product(s) found</div>
      <div className="productList">
        {cartList.map((product) => {
          return <Product data={product} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
