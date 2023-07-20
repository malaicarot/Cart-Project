import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const CartItem = (props) => {
    const {id, title, price, thumbnailMain} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    const totalItem = cartItems[id]* price;
 

  return (
    <div className='cartItem'>
        <img src={thumbnailMain} alt={title}/>
        <div className='cartItemDes'>
            <span>{title}</span>
            <span>{price}</span>
            <div>
              <button onClick={() => removeFromCart(id)}>-</button>
              <input value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              />
              <button  onClick={() => addToCart(id)}>+</button>
            </div>
            {/* <div>Subtotal:{totalItem}</div> */}
        </div>
    </div>
  )
}

export default CartItem