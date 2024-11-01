import { useRef, useState } from 'react'
import Navbar from './component/navbar'
import TextField from '@mui/material/TextField';
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const addTodo = () => {
    if (input) {
            setTodo([...todo, input]);
            setInput('');
            inputRef.current.focus();
          }
  }
 
  const deleteTodo = (index) => {
    todo.splice(index , 1);
    setTodo([...todo]);
  }
  const editTodo = () => {
    console.log("Edit ")

  }

  return (
    <>
    <Navbar />
    <h1 className='text-center font-bold text-8xl my-[3rem]'>Todo App using Firebase</h1>

                <TextField label="Add a new Todo" color="secondary" focused inputRef ={inputRef} onChange={(e) => setInput(e.target.value)} value={input}/>
            <button className="btn btn-outline-secondary" type="button" onClick={addTodo} >Add Todo</button>

          <ul className="pt-5">
              { todo.map((todoitem, index) => (
            <li key={index} className='position-relative text-dark fs-3 pe-5'>
                {todoitem}
                <div className='position-absolute top-0 end-0'>
                    <button className="btn btn-info me-2" type="button" onClick={editTodo}>Edit</button>
                    <button className="btn btn-danger" type="button" onClick={deleteTodo} >Delete</button>
                </div>
            </li>
         
              ))
              }
          </ul>

    </>
  )
}

export default App
