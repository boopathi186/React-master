import React, { useState } from "react";
import { Button, Row, Col, Container, Card, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Sidebar from "../Pages/sidebar";

import Toggle from "./Toggle";
import Swal from "sweetalert2";
import '../Css/CreateStyle.css';
import { useCreateProductMutation } from "../Components/Redux/ApiSlice";
import Header from "../Components/Header/Header";

interface Details {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}
const Create: React.FC = () => {
    const navigate = useNavigate();
    const [createProduct] = useCreateProductMutation();
    const [IsCreating, setIsCreating] = useState<boolean>(false);
    const initialValues: Details = {
        title: "",
        price: 0,
        description: "",
        images: ['https://pixabay.com/vectors/apparel-clothe-clothing-polo-golf-162192/'],
        categoryId: 1,
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        price: Yup.number().required("Price is required").positive("Price must be positive"),
        description: Yup.string().required("Description is required"),
    });

    const postData = (values: Details) => {
        setIsCreating(true)
        createProduct(values)

            .then(response => {
                console.log(response.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/dashboard/userProfile');
            })
            .catch((error) => {
                setIsCreating(true)

                console.error("There was an error!", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error creating the product',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            })
    };

    const ret = () => {
        navigate('/dashboard/userProfile');
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "info",
            title: "canceled",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        console.log("Canceled");
    };

    return (
        <Container fluid className="p-0">
            <Row className="m-0 p-0">
                <Col xl={2} lg={2} className="p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </Col>
                <Col xl={10} lg={10} className="p-0 m-0">
                    <Row className="border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                       <Header/>
                    </Row>
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    <Row className="h-75 d-flex align-items-center justify-content-center">
                        <Col xl={6} lg={8} md={10} sm={12}>
                            <Card className="mt-5 mx-5 text-center border-light shadow-sm">
                                <div className="text-center">
                                    <div className="mb-2 mt-4">
                                        <h3 className="text-secondary mb-5">Create Product</h3>
                                    </div>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={postData}
                                    >
                                        {({ handleSubmit }) => (
                                            <Form onSubmit={handleSubmit} className="">
                                                {['title', 'price', 'description'].map((field) => (
                                                    <Row key={field} className="justify-content-center mt-2">
                                                        <Col md={3} sm={12} className="py-3 text-secondary text-md-end text-start">
                                                            {field.toUpperCase()}
                                                        </Col>
                                                        <Col md={6} sm={12}>
                                                            <Field
                                                                className="form-control border border-white p-2 rounded-3 mb-2"
                                                                type="text"
                                                                name={field}
                                                                placeholder={`Enter your ${field.toLowerCase()}`}
                                                            />
                                                            <ErrorMessage name={field} component="div" className="text-danger" />
                                                        </Col>
                                                    </Row>
                                                ))}
                                                <Row className="d-flex mt-4">
                                                    <Col className="text-center">
                                                        <Button type="submit" variant="primary m-2 " disabled={IsCreating} >
                                                            {IsCreating ?
                                                           
                                                            ( <> 
                                                                <Spinner as="span" animation="border" size="sm" role="status"aria-hidden="true"/> Creating...
                                                            </>) :
                                                             (
                                                               "Create Product"
                                                            )}
                                                           </Button>
                                                        <Button type="button" variant="danger m-2" onClick={ret}>Cancel</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Create;
