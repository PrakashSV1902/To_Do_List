import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({items,handlecheck,handledelete}) => {
  return (
    <table className='unorderlist'>
      <tbody>
      {items.map ((item) =>(
          <LineItem 
          item ={item}
          key={item.id}
          handlecheck ={handlecheck}
          handledelete ={handledelete}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ItemsList