import React from 'react'

const Header = (props) => {
  const hdstyle = {backgroundColor:'grey',color:"black",padding:"10px"}

  return (
    <header style={{textAlign:'center'}}>             
        <h1 style={hdstyle}>To Do List</h1>    
               
        
    </header>
  )
  
}

export default Header