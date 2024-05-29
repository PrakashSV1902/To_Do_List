import React from 'react'
import { useRef } from 'react'

const AddItem = ({newitem,setNewitem,handleadd}) => {

  const inputref = useRef()
  return (
    <div className='addform'>
        <label htmlFor="additem">Add Item:</label>
        <input type="text" autoFocus id='additem' placeholder='Add Item' style={{marginLeft:"20px"}}
        onChange={(e) => setNewitem(e.target.value)} value={newitem} ref={inputref}
        />
        <button type='submit' style={{marginLeft:"20px"}} onClick={() => {handleadd();inputref.current.focus()}} >Add</button>
    </div>
  )
}

export default AddItem