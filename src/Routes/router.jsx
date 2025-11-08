import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Page/Root';
import Games from '../Page/Games';
import Authentication from '../Page/Authentication';
import Login from '../Components/Login/Login';
import SignUp from '../Components/Signup/SignUp';
import GamesDetails from '../Page/gamesDetails';
import About from '../Page/About';
import ErrorPage from '../Page/ErrorPage';
import Resetpassword from '../Components/ResetPassword/Resetpassword';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Profile from '../Page/Profile';
import EditProfile from '../Page/EditProfile';

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
                {path:"signup",element:<SignUp></SignUp>},
                {path:"reset",element:<Resetpassword></Resetpassword>}
            ]
        },
        {
            path:"/gamesdetails/:id",
            element:<PrivateRoute><GamesDetails></GamesDetails></PrivateRoute>,
            loader:()=>fetch("/games.json")

        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"*",
            element:<ErrorPage></ErrorPage>
        },
        {
            path:"/profile",
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:"/editprofile",
            element:<PrivateRoute><EditProfile></EditProfile></PrivateRoute>
        }
])

export default router;