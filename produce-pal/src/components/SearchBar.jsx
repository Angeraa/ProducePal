import React, { useContext, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import "./SearchBar.css";
import { PostalContext } from './PostalContext';

const SearchBar = ({ setQuery }) => {
  const [SearchIn, setSearchIn] = useState("");
  const {postalCode} = useContext(PostalContext);

  const fetchData = async () => {
    console.log("Fetching data: " + SearchIn);
    const response = await fetch("http://localhost:4000/produce/search/" + postalCode + "/" + SearchIn, {
      method: "GET",
      });
    const json = await response.json();
    console.log("Json data")
    console.log(json);
    console.log(typeof json);
    if (response.ok) {
      setQuery(json)
    }
  }

  return (
    <div className='search-bar'>
        <FaSearch id="search-icon" />
        <input className='search-input'
               type='text' 
               placeholder='Search...' 
               value={SearchIn} 
               onChange={(e) => setSearchIn(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' ? fetchData() : null}
        />
    </div>
  );
};

export default SearchBar;
