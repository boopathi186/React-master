import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import '../Css/LoginStyle.css';

const SignUp = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Too short")
            .max(10, "Too long")
            .required("Username is required"),

        email: Yup.string()
            .email("Invalid format email")
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

    return (
        <div className='login row m-0 bg-light d-flex align-items-center vh-100'>
            <div className='container bg-white  col-12 form-control w-50 border border-0 shadow rounded-3'>
                <Formik
                    initialValues={{
                        email: '', username: '', password: '', confirmPassword: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('Form data:', values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className=' text-danger'>
                            <div>
                                <label className=' text-danger fw-semibold' htmlFor="email">Email:</label>
                                <Field className='form-control fw-semibold bg-light border border-0  ' type="email" id="email" name="email" />
                                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                            </div>

                            <div>
                                <label className=' text-danger fw-semibold'  htmlFor="username">Username:</label>
                                <Field className='form-control  bg-light border border-0  '  type="text" id="username" name="username" />
                                <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                            </div>

                            <div>
                                <label className=' text-danger fw-semibold'  htmlFor="password">Password:</label>
                                <Field className='form-control bg-light border border-0  '  type="password" id="password" name="password" />
                                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                            </div>

                            <div>
                                <label className=' text-danger fw-semibold'  htmlFor="confirmPassword">Confirm Password:</label>
                                <Field className='form-control  bg-light border border-0  '  type="password" id="confirmPassword" name="confirmPassword" />
                                <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
                            </div>

                            <div>
                               <button className=' bg-danger  text-white border  border-none w-100 mt-2' type="submit" disabled={isSubmitting}>
                              <Link className='text-decoration-none text-white' to={'/home'}>       Submit</Link>
                                </button>
                            </div>
                            <Link className='text-decoration-none text-white' to={'/home'}></Link>
                            <span className='fs-5'>Already have an account? Click <Link> here</Link></span>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default SignUp;
