import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../firebase';

const auth=getAuth(app);

function Signin() {

    const [user,setUser]=useState({
        email:'',
        password:'',
    });

    const [error,setError]=useState(null);

    const handleSubmit=()=>{
        signInWithEmailAndPassword(auth,user.email,user.password)
        .then((value)=>{
            setError(value);
            alert('Log In Success')
        })
        .catch((error)=>console.log(error))
    }

    // console.log(error.user.email);

    return (
        <div>
            <h1>Sign In</h1>
            <label >Email</label>
            <input type="text" placeholder='Enter Email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /><br />
            <label >Password</label>
            <input type="password" placeholder='Enter passoword' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} /><br />
            <button onClick={handleSubmit} >Sign In</button>
        </div>
    )
}

export default Signin