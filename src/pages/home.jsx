import { useEffect, useRef, useState } from 'react'
import Navbar from '../component/navbar'
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../config/firbase';
import {  query, where, getDocs } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';

// import React, { useEffect, useRef, useState } from 'react'
// import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
// import { auth, db } from '../config/firbase';



function Home() {
  const [input, setInput] = useState('')
  const [editodo, setEditTodo] = useState('')
  const [todo, setTodo] = useState([]);
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
     setInput('') 
    } catch (error) {
      console.log(error)
    }
  }
 
  // const deleteTodo = (index) => {
  //   todo.splice(index , 1);
  //   setTodo([...todo]);
  // }
  // const editTodo = () => {

  //   setEditTodo(input)

  //   console.log("Edit ")

  // }

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
              {todo.length > 0 ? todo.map(todoitem => (
            <li key={todoitem.docid} className='position-relative text-dark'>
                <p className='p-2 text-3xl font-bold'>{todoitem.Todos}</p>
            </li> 
              ))
              : <h1>No Data</h1>
            }
          </ul> 
    </>
  )
}

export default Home





// const Home = () => {
//   const todoInput = useRef();

//   // usestate

//   // useeffect
//   useEffect(() => {
//     const getDataFromFirestore = async () => {
//       const q = query(collection(db, "todo"), where("uid", "==", auth.currentUser.uid));

//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         // console.log(`${doc.id} => ${doc.data()}`);
//         console.log(doc.data());
//         todo.push({
//           ...doc.data(),
//           docid: doc.id
//         })
//         setTodo([...todo])
        
//       });
//     }

//     getDataFromFirestore()
//   }, [])

//   // add todo
//   const addTodo = async (event) => {
//     event.preventDefault()
//     console.log(todoInput.current.value)

//     try {
//       const docRef = await addDoc(collection(db, "todo"), {
//         title: todoInput.current.value,
//         uid: auth.currentUser.uid
//       });
//       console.log("Document written with ID: ", docRef.id);
//       todo.push({
//         title: todoInput.current.value,
//         uid: auth.currentUser.uid,
//         docid: docRef.id
//       })
//       setTodo([...todo])
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }

//   }
//   return (
//     <>


//       <h1 className='text-center mt-5'>Todo App</h1>
//       <form className='text-center mt-5' onSubmit={addTodo}>
//         <input type="text" placeholder='enter todo' ref={todoInput} />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ol>
//         {todo.length > 0 ? todo.map(item => {
//           return <li key={item.docid}>{item.title}</li>
//         }) : <h1>No Data Found...</h1>}
//       </ol>
//     </>
//   )
// }

// export default Home
