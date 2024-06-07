import React from 'react'
import {Link} from "react-router-dom"
import './navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
      <Link to='/' className="link"><li>Home</li></Link>
      <Link to='/create' className="link"><li>Create</li></Link>
      {/* <Link to='/:id' className="link"><li>Update</li></Link> */}
    </div>
  )
}

export default Navbar
