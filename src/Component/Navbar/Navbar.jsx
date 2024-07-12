import React ,{useContext}from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {ShopContext} from "./../../Context/ShopContext"

const Navbar = () => { 
  const [menu, setmenu] =useState("shop")
  const {cartItems} = useContext(ShopContext)
  return (
    <>

  <div className='nav_1'>

  <div className='navbar' >
       <div className="nav-logo">
           <img src={logo} alt="" />
           <p>Cromine</p>
       </div>
       <ul className="nav-menu">
           <li onClick={()=>{setmenu("shop")}}> <Link to={'/'}>Shop</Link> {menu === "shop"?<hr/>:<></>}</li>
           <li onClick={()=>{setmenu("Men")}}> <Link to={'/Men'}>Men</Link> {menu === "Men"?<hr/>:<></>}</li>
           <li onClick={()=>{setmenu("Women")}}> <Link to={'/Women'}>Women</Link> {menu === "Women"?<hr/>:<></>}</li>
           <li onClick={()=>{setmenu("Kid")}}> <Link to={'/kid'}>Kid</Link> {menu === "kid"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
            <Link to={'/login'}><button>Login</button></Link>
           <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
           <div className="nav-cart-count">{cartItems?cartItems.length:0}</div>
         </div>
      
     </div>
  </div>
    </>
  )
}

export default Navbar