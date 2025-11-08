import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import { auth } from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';

export const AuthanticationContext=createContext();

const provider=new GoogleAuthProvider();

const AuthContext = ({children}) => {

    const [user,setUser]=useState();
    const [email,setEmail]=useState();
    const [loading,setLoading]=useState(true);

    const handleGoogle=()=>
    {
      setLoading(true);
    return  signInWithPopup(auth,provider)
      
    }

    const resetPassword=(email)=>
    {
      
      sendPasswordResetEmail(auth,email)
      .then(()=>
      {
       
       toast.success("Password Reset Email Sent!");
      })
      .catch((err)=>
      {
       
        toast.error(err.message);
      })
      
    }

  const profileUpdate=(name,photo)=>
    {
       return updateProfile(auth.currentUser,
        {
          displayName: name, photoURL: photo
        }
      )
      .then(()=>
      {
        toast.success("Profile Updated Successfully");
        setUser({...user,displayName:name,photoURL:photo})
      })
      .catch((e)=>
        {

toast.error(e.message);
        }
      )
    }  

   const handleSignIn = async (email, password, name, photo) => {
  try {
    setLoading(true);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const demoUser = res.user;
    await updateProfile(demoUser, { displayName: name, photoURL: photo });
    setUser({ ...demoUser, displayName: name, photoURL: photo });
    
  } finally {
    setLoading(false);
  }
};


    const handleSignOut=()=>
    {
      setLoading(true);
     return signOut(auth)
      .then(()=>
        {
     toast.success("Logged Out Successfully");
         
        }
      )
      .catch(err=>
      {
      
        toast.error(err.message);
      }
      )
    }

useEffect(()=>
{
const unSubscribe = onAuthStateChanged(auth,(currentUser)=>
{
    setUser(currentUser);
    setLoading(false);
    
});
return ()=>
{
    unSubscribe(); 
}
},[])

const handleLogIn=(email,password)=>
{
  setLoading(true);

return signInWithEmailAndPassword(auth,email,password);

}


    const authData={user,setUser,handleGoogle,handleSignIn,handleSignOut,handleLogIn,resetPassword,email,setEmail,profileUpdate, loading,setLoading};
  return (
    <AuthanticationContext.Provider value={authData}>
        {children}
    </AuthanticationContext.Provider>
  );
};

export default AuthContext;