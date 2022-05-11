import React, {  useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext();
  const refForm=useRef(null);
  // const [nameCocktail, setName]=useState('');
  function handleChange(e){
    // const value=e.target.value;
    // setName(value)
    // setSearchTerm(value);
    setSearchTerm(refForm.current.value);
  }
  function handleSubmit(e){
    e.preventDefault();

  }
  useEffect(()=>{
    refForm.current.focus();
  })
  return (
    <article className='search'>
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='cocktailName'>Search your favorite cocktails </label>
            <input
              type='text'
              id='cocktailName'
              required
              ref={refForm}
              // name='cocktailName'
              
              // value={nameCocktail}
              onChange={handleChange}
            />
          </div>
        </form>
    </article>

  )
}

export default SearchForm
