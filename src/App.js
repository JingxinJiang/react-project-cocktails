import React from 'react'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home'
import About from './pages/About'
// import SingleCocktail from './pages/SingleCocktail'
import SingleCocktail from './pages/SingleCocktail-JohnMethod'
import Cocktails from './pages/Cocktails'
import Error from './pages/Error'
// import components
import 'antd/dist/antd.css';
import SharedLayout from './sharedLayout/SharedLayout';
import SharedProductsLayout from './sharedLayout/SharedProductsLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cocktails' element={<SharedProductsLayout/>}>
            <Route index element={<Cocktails/>}/>
            <Route path=':id' element={<SingleCocktail/>}/>
          </Route> 
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
