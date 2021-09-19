import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Smuria X', 'Dragon Ball'])
  
  // const handleAdd = () => {
  //   // setCategories([...categories, 'Game of Thrones']);
  //   setCategories(categs => [...categs, 'Game of Thrones']);
  // };
  
  return (
    <>
      <h2>GiftExpertApp</h2>
      
      <AddCategory />

      <hr />

      <ol>
        {
          categories.map(category => {
            return <li key = {category}> {category} </li>
          })
        }
      </ol>
    </>
  )
}
