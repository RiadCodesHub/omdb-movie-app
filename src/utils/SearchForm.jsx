import React from 'react';
import {Input, Button, CiSearch} from '../data.js';
import { movieContext } from '../context.jsx';
import { useContext } from 'react';
import { useState } from 'react';

const SearchForm = ({className, searchOnMobile=false}) => {
  const { setQuery } = useContext(movieContext);
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
 

  const handleSubmit = (e) => {
    // Prevent form submission if input is empty
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please enter a movie name');
      return;
    }
    setQuery(inputValue);
  };

  const handleClick = (e) => {
   // Show input field on first click if not visible
    if (!inputVisible) {
      e.preventDefault();
      setInputVisible(true);
    }

    
  };

  return (
    <form onSubmit={handleSubmit}
          className={`flex items-center w-fit bg-gray-800 rounded-full overflow-hidden ${className}`}>
      <Input type="text"
             placeholder="search your favorite movie"
             //fix input not showing on mobile
             className={`${inputVisible || searchOnMobile ? 'block' : 'hidden'} flex-1 items-center w-sm py-2 px-4 text-white`}
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}/>
        {/* fix button align issue on mobile */}
      {!searchOnMobile ?  <Button type="submit"
              onClick={handleClick}
              className={`w-[60px] h-[100%] bg-amber-600 flex items-center justify-center group`}>
        <CiSearch className='text-[26px] group-hover:text-[30px] transition duration-800 stroke-2 text-gray-800'/>
      </Button> : <Button type="submit" className={`w-[60px] flex justify-center items-center h-full bg-amber-600 group`}>
        <CiSearch className='text-[26px] group-hover:text-[30px] transition duration-800 stroke-2 text-gray-800'/>
        </Button>}
    </form>
  );
}

export default SearchForm;