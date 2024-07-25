import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import hotdeck from '../Assets/Frame 629075.png';
import { Col, Row } from 'react-bootstrap';
import deck from '../Assets/Frame 365.png';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
const Login = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: values.email,
                password: values.password,
            });
            if (response.data.access_token) {
                sessionStorage.setItem('token', response.data.access_token);
                navigate('/dashboard');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            console.error(err.response);
            setError('Error logging in. Please try again.');
        }
    };

    // useEffect(() => {
    //     localStorage.removeItem('token');
      
    // },[] );

    const formFields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
    ];

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
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className='border-white shadow p-3 rounded-3'>
                                    <Col className='col-5 mb-5'>
                                        <div className='row'>
                                            <img src={hotdeck} alt='logo_img' width={24} height={70} />
                                        </div>
                                    </Col>
                                    {formFields.map((field, index) => (
                                        <div key={index}>
                                            <label className='fw-semibold' htmlFor={field.name}>{field.label}:</label>
                                            <Field
                                                className='mb-2 form-control fw-semibold bg-secondary bg-opacity-10 border border-0 p-2'
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                            />
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
