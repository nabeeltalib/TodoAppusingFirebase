import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../src/config/firbase';

const login = () => {
  const email = useRef();
  const password = useRef();

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const  HandleLogin = () => {
  console.log(email.current.value);
  console.log(password.current.value);


  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

  
  return (
    <>

    <h1 className='text-center font-bold text-8xl my-[3rem]'>Login</h1>
    <Card sx = {{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width:'50%' }}>
      <CardContent>
            <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={email} required />
            <br /><br />
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" inputRef={password} required />
            
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={HandleLogin}>Login</Button>
      </CardActions>
    </Card>


    </>
  )
}

export default login