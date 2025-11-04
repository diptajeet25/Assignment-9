import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Page/Root';
import Games from '../Page/Games';
import Authentication from '../Page/Authentication';
import Login from '../Components/Login/Login';
import SignUp from '../Components/Signup/SignUp';
import GamesDetails from '../Page/gamesDetails';
import About from '../Page/About';

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>
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
        },
        {
            path:"/gamesdetails/:id",
            element:<GamesDetails></GamesDetails>,
            loader:()=>fetch("/games.json")

        },
        {
            path:"/about",
            element:<About></About>
        }
])

export default router;