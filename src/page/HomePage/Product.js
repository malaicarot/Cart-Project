import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'
import "./Product.css"
const Product = (props) => {
    const {id, title, price, gender, thumbnailMain, thumbnailExtra, size, freeship} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
  return (
    <div className='productItem'>
        <div className='productIMG'>
            <img src={thumbnailMain}/>
        </div>
        <div className='ProducDes'>
            <h2>{title}</h2>
            <h4>${price}</h4>
        </div>
        <button onClick={() => addToCart(id)}>
          Add to Cart
          {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
    </div>
  )
}

export default Product;