import React, { useRef } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firbase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




  const Register = () => {
      const usernamee = useRef()
      const email = useRef()
      const password = useRef()
      const navigate = useNavigate()
      
      
      const registerUser = (event) => {
        event.preventDefault()
        console.log(usernamee.current.value);
        console.log(email.current.value);
        console.log(password.current.value);


        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(auth.currentUser.displayName = usernamee.current.value);
            
            
            toast("You are Now Add Todo!")
            navigate('/home')
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
        }

  return (
    <>
        <h1 className='text-center font-bold text-8xl my-[3rem]'>Register</h1>
        <div className='flex items-center justify-center'>
        <Card sx={{ p:8 }}>
      <CardContent sx={{ px:4 }}>
            <TextField id="outlined-basic" label="User Name" variant="outlined" inputRef={usernamee}/>
              <br /><br />
            <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={email} />
              <br /><br />
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" inputRef={password}/>
            
      </CardContent>
      <CardActions sx={{ px:4 }}>
        <Button variant="contained" onClick={registerUser}>Register</Button>
        <ToastContainer />
      </CardActions>
    </Card>
        </div>


    </>
  )
}


export default Register