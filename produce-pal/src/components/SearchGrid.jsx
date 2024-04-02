import React from 'react';
import './SearchGrid.css';
import Item from './Item.jsx';

const SearchGrid = ({ items }) => {
  if (items !== undefined) {
    console.log("displaying items:\n" + items);
    return (
      <div className='search-grid pt-10'>
        {items.map((item, id) => (
          <Item key={id} props={ item }></Item>
        ))}
      </div>
    );
  }
};

export default SearchGrid;