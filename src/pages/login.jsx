import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../src/config/firbase';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate()

const  HandleLogin = () => {
  console.log(email.current.value);
  console.log(password.current.value);


  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      navigate('/home')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, " new ", errorMessage);
      
    });
}

  
  return (
    <>

    <h1 className='text-center font-bold text-5xl my-[3rem]'>Log In To Your Account</h1>
    <div className='flex items-center justify-center text-center'>

      <Card sx={{ p:8 }}>
        <CardContent sx={{ px:4 }}>
              <TextField id="outlined-basic" label="Email" className="w-64" variant="outlined" inputRef={email} required />
              <br /><br />
              <TextField id="outlined-basic" label="Password" className="w-64" type="password" variant="outlined" inputRef={password} required />
              
        </CardContent>
        <CardActions sx={{ width: '100%', px:4}}>
          <Button variant="contained" className="w-64" onClick={HandleLogin}>Login</Button>
        </CardActions>
              <p className='pt-4'>If You Have No Account!  <span className='font-bold'><Link to={'register'}>SignUp</Link></span></p>
      </Card>
    </div>

    </>
  )
}

export default login