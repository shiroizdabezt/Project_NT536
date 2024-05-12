import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

  const [menu,setMenu] = useState("shop"); 
  //const {getTotalCartItems} = useContext(ShopContext);


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>CODYN SHOP</p>
      </div>
      
      <u1 className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("top_seller")}}><Link to='/top_seller'>Top Seller</Link> {menu==="top_seller"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("category")}}><Link to='/category'>Category</Link>{menu==="category"?<hr/>:<></>}</li>
      </u1>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout
        </button> : <Link to='/login'> <button>Login</button> </Link>}
        
        
        <Link to='/cart'>
          <img className='cart_icon' src={cart_icon} alt=""/>
        </Link>

        {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
      </div>
    </div>
  )
}

export default Navbar