import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import '../Css/LoginStyle.css';
import { Col, Row } from 'react-bootstrap';
import deck from '../Assets/Frame 365.png';
import hotdeck from '../Assets/Frame 629075.png';
import '../Css/SignUpStyle.css';
const SignUp = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Too short")
            .max(10, "Too long")
            .required("Username is required"),
        email: Yup.string()
            .email("Invalid email format ")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password is too short - should be 8 chars minimum")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
    });
    const navigate=useNavigate();
    const formFields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' }
    ];

    return (
        <Row className='row-cols-lg-2 m-0'>
            <Col lg={6} className='p-0 d-lg-block d-none'>
                <img className='image-fluid vh-100 w-100' src={deck} alt='logo_img' />
            </Col>
            <Col  lg={6} sm={12}>
                <div className='login row m-0 d-flex align-items-center vh-100'>
                    <div className='container bg-light bg-opacity-25  form-control w-75 border border-0 rounded-3'>
                        <Formik
                            initialValues={{
                                email: '', username: '', password: '', confirmPassword: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                // redirect to home
                                navigate('/dashboard');
                                console.log('Form data:', values);
                               
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className='border-white shadow-sm bg-white p-3 rounded-3 mx-xl-5 mx-0' >
                                    <Col className='col-5 mb-5'>
                                        <div className='row'>
                                            <img src={hotdeck} alt='logo_img' className='h-50 w-50' />
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
                                        <button className='submit text-white border border-none w-100 mt-2 p-2 rounded' type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                    <span>Already have an account? Click <Link to={'/login'}>here</Link></span>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
export default SignUp;
