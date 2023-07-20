import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <div>
      <Link to='/'>Shop</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Nav