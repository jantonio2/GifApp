import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Game of Thrones']);
  
  // const handleAdd = () => {
  //   // setCategories([...categories, 'Game of Thrones']);
  //   setCategories(categs => [...categs, 'Game of Thrones']);
  // };
  
  return (
    <>
      <h2>GiftExpertApp</h2>
      
      <AddCategory setCategories = {setCategories} />

      <hr />

      <ol>
        {
          categories.map(category => 
            <GifGrid 
              key = {category}
              category = {category} 
            />
          )
        }
      </ol>
    </>
  )
}
