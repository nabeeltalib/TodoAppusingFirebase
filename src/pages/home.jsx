import { useEffect, useRef, useState } from 'react'
import Navbar from '../component/navbar'
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../config/firbase';
import {  query, where, getDocs } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';



function Home() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')
  const [editodo, setEditTodo] = useState('')
  const inputRef = useRef(null)


  useEffect(()=>{
        const getData = async ()=>{
        const q = query(collection(db, "Todos"), where("uid", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc);
        todo.push({
            ...doc.data(),
            docid: doc.id,
        })
        setTodo([...todo])
        });
      }
     getData()
    },[])

  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "Todos"), {
        Todos: inputRef.current.value,
        uid: auth.currentUser.uid
     });
     todo.push({
      title: inputRef.current.value,
      uid: auth.currentUser.uid,
      docid: docRef.id
     })
     setTodo[[...todo]]
     console.log("Document written with ID: ", docRef.id);
         setInput('') 
    } catch (error) {
      console.log(error)
    }
  }
 
  const deleteTodo = (index) => {
    todo.splice(index , 1);
    setTodo([...todo]);
  }
  const editTodo = () => {

    setEditTodo(input)

    console.log("Edit ")

  }

  return (
    <>
    <Navbar />
    <h1 className='text-center font-bold text-8xl my-[3rem]'>Todo App using Firebase</h1>
        <div className='flex flex-col justify-center items-center gap-5'>
        <TextField label="Add a new Todo" color="secondary" focused inputRef ={inputRef} onChange={(e) => setInput(e.target.value)} value={input} 
          className='w-[20%]'
          />
        <button className="bg-blue-300 p-5 rounded w-[20%] font-bold text-2xl" type="button" onClick={addTodo} >Add Todo</button>
        </div>
        <ToastContainer/>

          <ul className='flex flex-col justify-center items-center gap-10 p-5'>
              {todo.map((todoitem, index) => (
            <li key={index} className='position-relative text-dark'>
                <p className='p-2 text-3xl font-bold'>{todoitem.Todos}</p>
                <div className='position-absolute top-0 end-0'>
                    <button className="btn btn-info me-4 bg-blue-400 p-2 font-bold text-2xl" type="button" onClick={editTodo}>Edit</button>
                    <button className="bg-red-500 p-2 font-bold text-2xl" type="button" onClick={deleteTodo} >Delete</button>
                </div>
            </li>
              ))
              }
          </ul>

    </>
  )
}

export default Home
