import React from 'react'
import ItemsList from './ItemsList'

const Content = ({items,handlecheck,handledelete,search,setSearch}) => {
    
  return (
    <>

      { 
      (items.length) ? (
        <ItemsList 
          items ={items}
          handlecheck ={handlecheck}
          handledelete ={handledelete}
        />
      ) : (
        <p className='emptymsg'>Your List is Empty</p>
      )
     }

    </>
    
  );
}

export default Content