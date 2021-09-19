import React, { useState } from 'react'

export const GiftExpertApp = () => {

  // const categories = ['One Punch', 'Smuria X', 'Dragon Ball']
  const [categories, setCategories] = useState(['One Punch', 'Smuria X', 'Dragon Ball'])
  
  const handleAdd = () => {
    // setCategories([...categories, 'Game of Thrones']);
    setCategories(categs => [...categs, 'Game of Thrones']);
  };
  
  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

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
