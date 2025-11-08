import React, {  useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import AuthContext, { AuthanticationContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const {  handleGoogle,handleLogIn, setEmail,setUser }=useContext(AuthanticationContext);
 const location=useLocation();
 const navigate=useNavigate();

  const signIn=(e)=>
  {
e.preventDefault();
const email=e.target.email.value;
const password=e.target.password.value;

handleLogIn(email,password)
.then(()=>
{
  toast.success("Login Successful");
  
navigate(location.state ? location.state : "/")
  
})
.catch((err)=>
{
 
  toast.error(err.message)
}
)
  }


const googleSignIn = async () => {
  try {
    const r = await handleGoogle();
  
    setUser(r.user);
   toast.success("Google Sign In SuccessFull");
    navigate(location.state ? location.state : "/");
  } catch (err) {
    
   toast.error(err.message);
  }
};




  return (
    <div className='w-[80%] mx-auto'>
        <title>Login - GameZone</title>
 
    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl  mt-16 mb-24  mx-auto">
      
      <div className="card-body ">
          <h2 className='text-center text-2xl font-bold'>LOGIN HERE</h2>
        <form onSubmit={signIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <Link to="/auth/reset"><a className="link link-hover">Forgot password?</a></Link>
          <button type='submit' className="btn btn-neutral mt-4" >Login</button>
          <button type='button' className="btn bg-white mt-2 text-black border-[#bababa]"onClick={googleSignIn} >
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<p className='text-center text-md mt-2'>Don't Have an Account? <Link to="/auth/signup" className='text-blue-600 font-bold'>SignUp</Link></p>
    
        </form>
      </div>
    </div>


    </div>
  );
};

export default Login;