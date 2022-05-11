import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'


const CocktailList = () => {
  const {loading, cocktails}=useGlobalContext();
   if(loading){
    return <Loading/>
  }
  if(cocktails.length<1){
    return (<h2 className='section-title'>
      No match for search
    </h2>)
  }
  return (
    <section className='section'>
      <div className="cocktails-center">
        {cocktails.map((item)=>{
          
          return(<main key={item.id}>
          <Cocktail  {...item}/>
          </main>)
        })}
      </div> 
        
      
    </section>
  )
}

export default CocktailList
