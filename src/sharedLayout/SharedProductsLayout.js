import { Outlet } from "react-router-dom";
import React from 'react'

const SharedProductsLayout = () => {
  return (
    <section className="section">
    <h2 className="section-title1">Cocktails</h2>
    <Outlet />
    
    </section>
  )
}

export default SharedProductsLayout