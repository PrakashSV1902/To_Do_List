import React from 'react'

const Content1 = ({length,todo}) => {
  return (
    <div>
    <h2 style={{textAlign:"center",color:"green"}} className='result'>{todo} {todo === 1 ? "Task" : "Tasks"} To Do</h2>
    </div>
  )
}

export default Content1