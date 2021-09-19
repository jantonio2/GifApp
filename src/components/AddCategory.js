import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Submit hecho');
    if(inputValue !== undefined && inputValue.trim().length > 2){
      setCategories(categs => [...categs, inputValue]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit = {handleSubmit}>
      <input 
        type = "text"
        value = {inputValue}
        onChange = {handleInputChange}
      />
    </form>
  );
}
