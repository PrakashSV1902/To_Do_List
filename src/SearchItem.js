import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <div className='searchdiv'>
        <label htmlFor="search">Search:</label>
        <input type="text" role='searchbox' placeholder='Search' style={{marginLeft:"20px"}} value={search}
        onChange={(e) =>{setSearch(e.target.value)}}
        />
        
    </div>
  )
}

export default SearchItem
