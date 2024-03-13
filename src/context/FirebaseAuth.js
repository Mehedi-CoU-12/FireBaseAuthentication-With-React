import React from 'react'
import FirebaseContext from './Firebase'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import { app } from '../firebase';

const auth=getAuth(app);
const db=getDatabase(app);

export const FirebaseAuth=({children})=>{

    const signupUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const sendDataToDB=(key,data)=>{
       return  set(ref(db,key),data)
    }

    return (
        <FirebaseContext.Provider value={{signupUser,sendDataToDB}}>
            {children}
        </FirebaseContext.Provider>
    )
}
