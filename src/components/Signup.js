import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { app } from '../firebase'
import FirebaseContext from '../context/Firebase';

const auth=getAuth(app);

function Signup() {

    const [user,setUser]=useState({
        email:'',
        password:'',
    })

    const useFirebase=useContext(FirebaseContext);

    const handleSubmit=()=>{
        useFirebase.signupUser(user.email,user.password);

        useFirebase.sendDataToDB("users/",{
            email:user.email,
            password: user.password
        });
    }

    // console.log(user)

  return (
    <div>
    <h1>Sign up form</h1>
    <label >Email</label>
    <input type="text" placeholder='Enter Email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/><br />
    <label >Password</label>
    <input type="password" placeholder='Enter passoword' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/><br />
    <button onClick={handleSubmit} >Sign Up</button>
    </div>
  )
}

export default Signup