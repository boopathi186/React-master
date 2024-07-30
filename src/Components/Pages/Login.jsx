import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import hotdeck from '../Assets/Frame 629075.png';
import { Col, Row, Spinner } from 'react-bootstrap';
import deck from '../Assets/Frame 365.png';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';


const Login = () => {
    const[loading,setLoading]=useState(true);
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: values.email,
                password: values.password,
            });
            if (response.data.access_token) {
                sessionStorage.setItem('token', response.data.access_token);
                navigate('/dashboard');
                setTimeout (() =>
                {  Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });},2000);
              
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            console.error(err.response);
            setError('Error logging in. Please try again.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const formFields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: showPassword ? 'text' : 'password' },
    ];

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])
    
    if (loading)
        return <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100"><Spinner animation="border" /></h4>;
      if (error) return <p>Error Fetching data: {error.message}</p>;
    return (
        <Row className='row-cols-lg-2 m-0'>
            <Col lg={6} className='p-0 d-lg-block d-none'>
                <img className='image-fluid vh-100 w-100' src={deck} alt='logo_img' />
            </Col>
            <Col lg={6} sm={12}>
                <div className='login row m-0 d-flex align-items-center vh-100'>
                    <div className='container bg-white col-12 form-control w-75 border border-0 rounded-3'>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}>
                            {({ isSubmitting }) => (
                                <Form className='border-white shadow p-3 rounded-3'>
                                    <Col className='col-5 mb-5'>
                                        <div className='row'>
                                            <img src={hotdeck} alt='logo_img' className='h-25 w-50' />
                                        </div>
                                    </Col>
                                    {formFields.map((field, index) => (
                                        <div key={index} className='mb-3 position-relative'>
                                            <label className='text-secondary mb-2 fw-semibold' htmlFor={field.name}>{field.label}:</label>
                                            <Field
                                                className=' input form-control fw-semibold bg-secondary bg-opacity-10 border border-0 shadow-sm p-3'
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                            />
                                            {field.name === 'password' && (
                                                <span className='eye'
                                                    onClick={togglePasswordVisibility}  >
                                                    {showPassword ? <i className="bi bi-eye-fill text-danger fs-5"></i> : 
                                                   <i className="bi bi-eye-slash-fill text-danger fs-5"></i>}
                                                </span>
                                            )}
                                            <ErrorMessage name={field.name} component="div" style={{ color: 'red' }} />
                                        </div>
                                    ))}
                                    {error && <div style={{ color: 'red' }}>{error}</div>}
                                    <div>
                                        <button className='w-100 border rounded-3 border-none bg-danger text-white mb-3 mt-3 p-2'
                                            type='submit' disabled={isSubmitting}>
                                            Login
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Login;
