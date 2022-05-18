import React from 'react'
import { Link } from 'react-router-dom'
import userimage from '../../images/userimage.jpeg'
import "./Header.scss"
function Header() {
  return (
    <div className='header'>
     <Link to="/">
     <div className="logo">Emeka redux movie app</div>
     </Link>
        <div className="user-image">
       <img src={userimage} alt="user" />
     </div>
    </div>
  )
}

export default Header