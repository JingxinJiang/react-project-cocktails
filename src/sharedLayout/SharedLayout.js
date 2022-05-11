import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <footer ><h4 className="footerCenter">jjx</h4></footer>
    </>
  )
}

export default SharedLayout