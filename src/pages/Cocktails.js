import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
const Cocktails = () => {
  return (
   <section className=' section'>
     <SearchForm/>
     <CocktailList/>
   </section>
  )
}

export default Cocktails