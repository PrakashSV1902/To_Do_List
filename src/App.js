import AddItem from "./AddItem";
import Content from "./Content";
import Content1 from "./Content1";
import Header from "./Header";
import {useEffect, useState} from 'react'
import SearchItem from "./SearchItem";




function App() {


  const[items,setItems] = useState ([]);

  useEffect (() =>{
    setItems(JSON.parse(localStorage.getItem("todo_list")))
  },[])

  const handlecheck = async (id) =>{
    const listItems = items.map(item => (
      item.id === id ? {...item,checked:!item.checked} : item
    ))
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
    
  }

  const handledelete = async (id) =>{
    const listItems = items.filter (item => 
    item.id !== id
    )
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))

  }

  
  const checkeditems = items.filter ( item =>(
      item.checked == false
    ))
   

  const [newitem,setNewitem] = useState("")  

  
  console.log(items.length)
  const additem = async (item) =>{
    const id = items.length ? Number(items[items.length-1].id)+1 : 1 ;
    const addnewitem ={id:id+"",checked:false,item}
    const listitems = [...items,addnewitem]
    setItems(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems))

  }

  const handleadd = (e) =>{
    if(!newitem) return;
    console.log(newitem)
    //adding item to array
    additem(newitem)
    setNewitem("")
    
  }

  const [search,setSearch] = useState("")


  return (
    <div className="alldiv">
      <Header title="Display List"/>

      <div className="inputfields">
        <AddItem 
        newitem ={newitem}
        setNewitem = {setNewitem}
        handleadd = {handleadd}
        />

        <SearchItem
        search ={search}
        setSearch ={setSearch}
        />

      </div>

      <main>
        
        <Content 
          items ={items.filter (item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handlecheck ={handlecheck}
          handledelete ={handledelete}
          search ={search}
          setSearch ={setSearch}
        /> 
        
        
      </main>
      
      <Content1 
      length ={items.length}
      todo ={checkeditems.length}
      />

      
    </div>
   
  );
}

export default App;