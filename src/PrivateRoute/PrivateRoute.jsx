import React, { useContext } from 'react';
import { AuthanticationContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const loc=useLocation();
    console.log(loc);
    


    const {user}=useContext(AuthanticationContext);
    if(user)
  return children;
else{
    return <Navigate state={loc.pathname} to="/auth/login"></Navigate>
}
};

export default PrivateRoute;