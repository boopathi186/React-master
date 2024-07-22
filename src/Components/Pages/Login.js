import React from 'react'
import { Link } from 'react-router-dom';
import hotdeck from '../Assets/Frame 629075.png';
import { Col, Row } from 'react-bootstrap';
import deck from '../Assets/Frame 365.png'
const Login = () => {
    return (
        <Row className='row-cols-2 m-0'>
            <Col lg={6} className='p-0 d-lg-block d-none'>
                <img className='image-fluid vh-100 w-100' src={deck} alt='logo_img'></img>
            </Col>
            <Col lg={6} md={12}>
                <Row className='login row m-0 d-flex align-items-center vh-100'>

                    <Col className='container  col-12 form-control w-75 border border-0 rounded-3'>
                        <form className='border-white shadow p-3 rounded-3'>
                            <div className='text-center'>
                                <img className='text-center' src={hotdeck} alt='logo' ></img></div>
                            <div className='form-groups'>
                                <label className='text-secondary fs-5 text-opacity-50 fw-semibold mt-2 mb-2' htmlFor=''>UserName</label>
                                <input type='text' name='username' className='form-control bg-light 
                border border-0 p-2'/>
                            </div>

                            <div className='form-groups'>
                                <label className='text-secondary fs-5 text-opacity-50 fw-semibold mt-2 mb-2' htmlFor=''>Password</label>
                                <input type='password' name='Password' className='form-control bg-light
                border border-0 p-2 '/>
                            </div>
                            <div>
                                <button className='w-100 border rounded-3 border-none bg-danger text-white mb-3 mt-3 p-2' type='button'>
                                    <Link className='text-decoration-none text-white' to={'/home'}>Login</Link></button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Login;