import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from "../components/Navbar";
import logo from '../images/logojjx.png'
const SharedLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default SharedLayout