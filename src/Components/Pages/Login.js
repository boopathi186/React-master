import React from 'react'
import { Link } from 'react-router-dom';
import hotdeck from '../Assets/Frame 629075.png';
const Login = () => {
    return (
      
       <div className='login row m-0 bg-light d-flex align-items-center vh-100'>
       
        <div className='container bg-light col-12 form-control w-50 border border-0 shadow rounded-3'>
        <form>
             <div className='text-center'><img className='text-center' src={hotdeck} alt='logo' ></img></div>
            <div className='form-groups'>
                <label className='text-danger fw-bold mt-2 mb-2' htmlFor=''>UserName</label>
                <input type='text' name='username' className='form-control bg-secondary bg-opacity-10
                border border-0 p-2'/>
            </div>
            
            <div className='form-groups'>
                <label className='text-danger fw-bold mt-2 mb-2' htmlFor=''>Password</label>
                <input type='password' name='Password' className='form-control bg-secondary bg-opacity-10
                border border-0 p-2 '/>
            </div>
            <div>
                <button className='w-100 border rounded-3 border-none bg-danger text-white mb-3 mt-3 p-2' type='button'><Link className='text-decoration-none text-white' to={'/home'}>Login</Link></button>
            </div>
        </form>
       </div></div>
    )
}

export default Login;