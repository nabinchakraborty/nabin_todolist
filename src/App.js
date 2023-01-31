import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
// import Like from './components/Like'
// import UseCounter from './custom-hooks/Usecounter'
import useList from './custom-hooks/useList'


export default function App() {
  // const {count,increment,decrement} = UseCounter()
  const {list,push,pull} = useList()
  const [todo, setTodo] = useState("")
  const onsubmithandler=(event)=>{
    event.preventDefault()
    push(todo)
    setTodo("")
  }
  return (
    <>
    
    
    
    <div className='inputfield'>
      <div className='header'>
        <form className='forminput' onSubmit={(event)=>{onsubmithandler(event)}}>
        
          <input required placeholder='Enter your items here' type="text" onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
          <button type="submit"  >Add </button>
        </form>
        <h4 className='itemList'>{list.map((listItem,listIndex)=>{
          return ( 
            <>
          <li key={listIndex}><span className='textitem'>{listItem} </span> <button onClick={()=>{pull(listIndex)}}><FontAwesomeIcon icon={faTrashCan} /></button> </li>
         
          </>
          )
        })}
        </h4>
      </div>
    </div>
    
    </>
  )
}
