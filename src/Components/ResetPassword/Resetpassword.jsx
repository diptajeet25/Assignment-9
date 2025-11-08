import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthanticationContext } from '../../Context/AuthContext';

const Resetpassword = () => {
    const{email,setEmail,resetPassword}=useContext(AuthanticationContext);
   

    const forgetPass=(e)=>
{

e.preventDefault();

  resetPassword(email);
  window.open("https://mail.google.com/mail/u/0/#inbox");
  
}
  return (
    <div className='w-[80%] mx-auto'>
      <title>Reset Password - GameZone</title>
        
 
    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl  mt-16 mb-24  mx-auto">
      
      <div className="card-body ">
          <h2 className='text-center text-2xl font-bold'>RESET PASSWORD</h2>
        <form  className="fieldset" onSubmit={forgetPass}>
          <label className="label">Email</label>
          <input type="email" value={email} name="email"  className="input" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
        
          <button type='submit' className="btn btn-neutral mt-4" >RESET</button>
           
        </form>
      </div>
    </div>


    </div>
  );
};

export default Resetpassword;