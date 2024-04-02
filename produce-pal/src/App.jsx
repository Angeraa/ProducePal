import React from 'react'
import './App.css'
import { PostalContextProvider } from './components/PostalContext'
import { ShoppingListProvider } from './components/ShoppingListContext'
import SearchBar from './components/SearchBar'
import SearchGrid from './components/SearchGrid'
import Header from './components/Header'
import { useState } from 'react'

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className='App'>
      <PostalContextProvider>
        <ShoppingListProvider>
          <Header/>
          <div className='search-container'>
            <SearchBar setQuery={ setResults }/>
            <SearchGrid items={ results }/>
          </div>
        </ShoppingListProvider>
      </PostalContextProvider>
    </div>
  )
}

export default App
