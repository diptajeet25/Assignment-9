import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import { auth } from '../Firebase/Firebase.config';

export const AuthanticationContext=createContext();

const provider=new GoogleAuthProvider();

const AuthContext = ({children}) => {
    const [user,setUser]=useState();
    const [email,setEmail]=useState();

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

    const resetPassword=(email)=>
    {
      sendPasswordResetEmail(auth,email)
      .then((r)=>
      {
        console.log(r);
        alert("Reset Mail Sent")
      })
      .catch((err)=>
      {
        console.log(err);
      })
      
    }

    const handleSignIn=(email,password,name,photo)=>
    {
createUserWithEmailAndPassword(auth,email,password)
.then(res=>
{
  const demoUser=res.user;
  return updateProfile(demoUser,{
    displayName:name,
    photoURL:photo,
  }).then(()=>
  {
setUser({ ...demoUser, displayName: name, photoURL: photo });
  })

})
.catch(err=>
{
  console.log(err)
}
)

    }

    const handleSignOut=()=>
    {
      signOut(auth)
      .then(r=>
        {
          alert("Kitare");
          console.log(r);
        }
      )
      .catch(err=>
      {
        console.log(err)
      }
      )
    }

useEffect(()=>
{
const unSubscribe = onAuthStateChanged(auth,(currentUser)=>
{
    setUser(currentUser);
    
});
return ()=>
{
    unSubscribe(); 
}
},[])

const handleLogIn=(email,password)=>
{
signInWithEmailAndPassword(auth,email,password)
.then(()=>
{
  alert("Sign In Hoise");
})
.catch(err=>
{
  console.log(err)
}
)
}


    const authData={user,setUser,handleGoogle,handleSignIn,handleSignOut,handleLogIn,resetPassword,email,setEmail}
  return (
    <AuthanticationContext.Provider value={authData}>
        {children}
    </AuthanticationContext.Provider>
  );
};

export default AuthContext;