import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <img src={logo} alt='cocktail logo' className='logo'/>
        <ul className='nav-links'>
            <li>
              <NavLink to='/' className={({isActive})=>isActive?'link active':'link'}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive})=>isActive?'link active':'link'}>About</NavLink>
            </li>
            <li>
              <NavLink to='/cocktails' className={({isActive})=>isActive?'link active':'link'}>Cocktails</NavLink>
            </li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
