import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Page/Root';
<<<<<<< HEAD
import Games from '../Page/Games';
import Authentication from '../Page/Authentication';
import Login from '../Components/Login/Login';
import SignUp from '../Components/Signup/SignUp';
=======
>>>>>>> eb6b064403fe1ce1964eddbb9de9af1abb551ba3

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>
<<<<<<< HEAD
    },
    {
        path:"/games",
        element:<Games></Games>,
        loader:()=> fetch("/games.json"),
       
    },
    {
        path:"/auth",
        element:<Authentication></Authentication>,
        children:[
            {path:"login",element:<Login></Login>},
            {path:"signup",element:<SignUp></SignUp>}
        ]
=======
>>>>>>> eb6b064403fe1ce1964eddbb9de9af1abb551ba3
    }
])

export default router;