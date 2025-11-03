import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 
import { auth } from '../Firebase/Firebase.config';

export const AuthanticationContext=createContext();

const provider=new GoogleAuthProvider();

const AuthContext = ({children}) => {
    const [user,setUser]=useState();

    const handleGoogle=()=>
    {
      signInWithPopup(auth,provider)
      .then(r=>
      {
        console.log(r.user);
        setUser(r.user);
        alert("Kire Vai")
      }
      ).catch(err=>
      {
        console.log(err);
        alert("Hoilo Na re Vai")
      }
      )
    }

    const handleSignIn=(email,password,name,photo)=>
    {
createUserWithEmailAndPassword(auth,email,password)
.then(res=>
{
  const demoUser=res.user;
 setUser({ ...demoUser, displayName: name, photoURL: photo });
  console.log(user)

})
.catch(err=>
{
  console.log(err)
}
)

    }


    const authData={user,setUser,handleGoogle,handleSignIn}
  return (
    <AuthanticationContext.Provider value={authData}>
        {children}
    </AuthanticationContext.Provider>
  );
};

export default AuthContext;