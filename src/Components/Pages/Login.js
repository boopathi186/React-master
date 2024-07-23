import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import hotdeck from '../Assets/Frame 629075.png';
import { Col, Row } from 'react-bootstrap';
import deck from '../Assets/Frame 365.png'
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Login = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Too short")
            .max(10, "Too long")
            .required("Username is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password is too short - should be 8 chars minimum")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    });
    
    const navigate = useNavigate();

    const formFields = [ 
        { name: 'username', label: 'Username', type: 'text' },
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
                            initialValues={{
                                username: '', password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                // Redirect to home
                                navigate('/dashboard');
                                console.log('Form data:', values);                              
                            }}>
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
                                    <div>
                                        <button className='w-100 border rounded-3 border-none bg-danger text-white mb-3 mt-3 p-2' type='submit' disabled={isSubmitting}>
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
    )
}

export default Login;
