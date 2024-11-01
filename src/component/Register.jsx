import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firbase';




  // const bull = (
  //   <Box
  //     component="span"
  //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  //   >
  //     •
  //   </Box>
  // );

  const Register = () => {
      const email = useRef()
      const password = useRef()
    
      const registerUser = (event) => {
        event.preventDefault()
        console.log(email.current.value);
        console.log(password.current.value);
    
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
        }

  return (
    <>
        <h1 className='text-center font-bold text-8xl my-[3rem]'>Register</h1>
    <Card sx = {{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width:'50%' }}>
      <CardContent>
      <TextField id="outlined-basic" label="User Name" variant="outlined" />
      <br /><br />
            <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={email} />
            <br /><br />
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" inputRef={password}/>
            
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={registerUser}>Register</Button>
      </CardActions>
    </Card>

    </>
  )
}


// const Register = () => {
//   const email = useRef()
//   const password = useRef()

//   const registerUser = (event) => {
//     event.preventDefault()
//     console.log(email.current.value);
//     console.log(password.current.value);

//     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user)
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log(errorMessage)
//       });


//   }
//   return (
//     <>
//       <h1 className='text-center'>Register</h1>
//       <form onSubmit={registerUser}>
//         <input type="email" placeholder='enter your email' ref={email} />
//         <input type="password" placeholder='enter your password' ref={password} />
//         <button>Register</button>
//       </form>
//     </>
//   )
// }

export default Register