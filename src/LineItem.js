import React from 'react'
import {FaTrash} from 'react-icons/fa'

const LineItem = ({item,handlecheck,handledelete}) => {
  return (
        <tr>
            <td className='checkbox'><input type="checkbox" checked = {item.checked} onChange={() => handlecheck(item.id)}/></td>
            <td><label style={(item.checked)?{textDecoration:"line-through"}: null} onDoubleClick={() => handlecheck(item.id)} className='itemname'>
                {item.item}
            </label></td>
            <td className='icon'><FaTrash style={{marginLeft:20}} role='button' tabIndex={'0'} onClick={() => handledelete(item.id)} /></td>
                
        </tr>    
  )
}

export default LineItem
