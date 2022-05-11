import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url1 = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id}=useParams();
  
  const [newsingle,setnewSingle]=useState([]);
  // const [newsingle,setnewSingle]=useState(null);
  console.log(id);
  const fetchDetail=async()=>{
      try {
        
        const response1=await fetch(`${url1}${id}`);
        
        const data=await response1.json();
        console.log(data);
        const {drinks}=data;
        console.log(drinks);
        const newSingleCocktail=drinks.map((item)=>{
const {idDrink, strDrink,strCategory,strAlcoholic,strGlass,strInstructions,strDrinkThumb,strIngredient1}=item;
          return ({id:idDrink,name: strDrink,category:strCategory,info:strAlcoholic,glass:strGlass,instruction:strInstructions,image:strDrinkThumb,ingredient:strIngredient1})
        })
        // const {strDrink:name,
        //   strCategory:category,
        //   strAlcoholic:info,
        //   strGlass:glass,
        //   strInstructions:instruction,
        //   strDrinkThumb:image,
        //   strIngredient1,strIngredient2,
        //   strIngredient3,strIngredient4,
        //   strIngredient5}=drinks[0];
        // const ingredients=[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
        // const newSingleCocktail1={name,
        //   category,
        //   info,
        //   glass,
        //   instruction,
        //   ingredients};

        console.log(newSingleCocktail);
        setnewSingle(newSingleCocktail);
        // setnewSingle(newSingleCocktail1);
      } catch (error) {
        console.log(error);
      }
      }
  useEffect(()=>{
    fetchDetail();
  },[id])
      
  return (
    <section className='section '>
      
      {newsingle.map((item)=>{
        const {id, name,category,info,glass, image,instruction,ingredient}=item; 
        
        return(
          <article className='cocktail-section drink' key={id}>
         
            <img src={image}/> 
            <div className="drink-info">
            <h3> <span className='drink-data'>Name:</span>{name}</h3>
            <h3><span className='drink-data'>Category:</span> {category}</h3>
            <h3><span className='drink-data'>Info:</span> {info}</h3>
            <h3><span className='drink-data'>Glass:</span> {glass}</h3>
            <h3><span className='drink-data'>Instructions:</span> {instruction}</h3>
            <h3><span className='drink-data'>Ingredient:</span> {ingredient}</h3>
            <Link to='/cocktails' className='btn btn-white btn-primary'> Go back </Link>
            </div>  
                     
          
          
          
          </article>
        )
      })}
      

    </section>
  )
}

export default SingleCocktail
