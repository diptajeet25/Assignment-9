import React, { useContext } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'
import { AuthanticationContext } from '../../Context/AuthContext';

const Navbar = () => {
const {user}=useContext(AuthanticationContext);
console.log(user)
  const link = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/games">Games</Link></li>
      <li><Link to="/">Career</Link></li>
    </>
  )
  return (
    <div>

        <div className="navbar bg-base-100 shadow-sm ">
  <Link to="/" className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 text-lg font-semibold mt-3 w-52 p-2 shadow">
     {link}
     
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={logo} className='w-28' alt="" /></a>
  </Link>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-lg font-semibold  menu-horizontal px-1">
   {link}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    { user ? <img src={user.photoURL}  className='w-10 h-10 rounded-full'></img> :
    <Link to="/auth/signup" className="btn btn-neutral">Sign Up</Link>
}
 { user ? user.displayName :
     <Link to="/auth/login" className="btn btn-primary">Log In</Link>
}

   
  </div>
</div>
    </div>
  );
};

export default Navbar;