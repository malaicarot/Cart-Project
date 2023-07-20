import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
const CartPage = () => {
  const {cartItems, checkout, getTotalCartAmount, cartList} = useContext(ShopContext);
  const navigate = useNavigate();
  // const total = getTotalCartAmount();
  return (
    <div className='cartList'>
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className=''>
        {cartList.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      <div>
        {/* <p>Subtotal: ${total}</p> */}
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  )
}

export default CartPage