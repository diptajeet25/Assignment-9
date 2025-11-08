import React, { useContext } from 'react';
import { AuthanticationContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const loc=useLocation();
   
    


    const {user,loading}=useContext(AuthanticationContext);
    if(loading)
    {
      return <div className='flex justify-center my-80'><div className="loading loading-infinity loading-xl"></div></div>
    }
    if(user)
  return children;
else{
    return <Navigate state={loc.pathname} to="/auth/login"></Navigate>
}
};

export default PrivateRoute;