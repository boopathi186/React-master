import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/LoginStyle.css';
import hotdeck from '../Assets/Frame 629075.png';
const SignUp = () => {
    return (
      
       <div className='login row m-0 bg-light d-flex align-items-center vh-100'>
        <div className='container bg-light col-12 form-control w-50 border border-0 shadow rounded-3'>
        <form>
        <div className='text-center'><img className='text-center' src={hotdeck}  alt='logo'></img></div>
            <div className='form-groups'>
                <label className='text-danger fw-bold mt-2 mb-2' htmlFor=''>UserName</label>
                <input type='text' name='username' className='form-control bg-secondary bg-opacity-10
                border border-0 p-2'/>
            </div>
            <div className='form-groups'>
                <label className='text-danger fw-bold mt-2 mb-2' htmlFor='email'>Email</label>
                <input type='email' name='email' className='form-control bg-secondary bg-opacity-10
                border border-0 p-2'/> 
            </div>
            <div className='form-groups'>
                <label className='text-danger fw-bold mt-2 mb-2' htmlFor=''>Password</label>
                <input type='password' name='Password' className='form-control bg-secondary bg-opacity-10
                border border-0 p-2 '/>
            </div>
            <div className='form-groups'>
                <label className='text-danger fw-bold mt-2 mb-2' htmlFor=''>Confirm Password</label>
                <input type='password' name='cpassword' className='form-control bg-secondary bg-opacity-10
                border border-0 p-2'/>
            </div>
            <div>
                <button className='w-100 border rounded-3  border-none bg-danger text-white mt-3 p-2' type='button'><Link className='text-decoration-none text-white' to={'/home'}>Sign Up</Link></button>
            </div>
            <span className=''>Already have an account?<Link className='' to={'/login'}>here</Link></span>
        </form>
       </div></div>
    )
}

export default SignUp;