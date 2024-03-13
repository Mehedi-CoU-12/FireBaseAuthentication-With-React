import { getDatabase, set, ref } from 'firebase/database';
import { createUserWithEmailAndPassword, getAuth ,GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut} from 'firebase/auth'
import { app } from './firebase';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Account from './components/Account';
import './App.css'
import { useEffect, useState } from 'react';



function App() {

    //for sign in with google
    const googleProvider=new GoogleAuthProvider();
    const auth=getAuth(app);

    const handleSubmit=()=>{
        signInWithPopup(auth,googleProvider);
    }

    const [user,setUser]=useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
            setUser(user);
            else
            {
                console.log("You are logged Out");
                setUser(null);
            }
        })
    },[])

    console.log(user)

    const signout=()=>{
        signOut(auth);
    }

    if(user)
    {
        return (
            <div className='app'>
                <div>
                    <h1>Account</h1>
                    <h4>Email:{user.email}</h4>
                    <button onClick={signout} >Log Out</button>
                </div>
            </div>
          )
    }

    return (
        <div className='app'>
            <div>
                <Signup />
                <br />
                <button onClick={handleSubmit} >Sign In With Google</button>
                <Signin />
            </div>
        </div>
    );
}

export default App;
