import { useEffect, useState } from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "../Pages/sidebar";
import Header from "../Components/Header/Header";
import Toggle from "../Pages/Toggle";
import Swal from "sweetalert2";
import { getproducts } from "../Redux/ApiCall";
import { useUpdateProductMutation } from "../Components/Redux/ApiSlice";

const Update = () => {
    const { id } = useParams();
    const [info, SetInfo] = useState({
        title: "", price: 0, description: "",
    });

    const handlChange = (event) => {
        SetInfo({
            ...info,
            [event.target.name]: event.target.value
        });
    };
const [updateProduct] = useUpdateProductMutation();

    useEffect(() => {
        getproducts(id)
            .then(response => {
                SetInfo({
                    title: response.data.title,
                    price: response.data.price,
                    description: response.data.description
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const putData = () => {
       updateProduct({id:id, ...info})
            .then(response => {
                SetInfo(response.info);
                console.log(response.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
        window.history.back(); //go back to table
    };

    const ret = () => {
        window.history.back();
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "info",
            title: "canceled",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
    };

    return (
        <Container fluid>
            <Row className="m-0 p-0">
                <Col xl={2} lg={2} className="p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </Col>
                <Col xl={10} lg={10} className="p-0 m-0">
                    <Row className="border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </Row>
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    <Row className="h-75 d-flex align-items-center justify-content-center">
                        <Col xl={6} lg={8} md={10} sm={12}>
                            <div className="card mt-5 mx-5 text-center border-light shadow-sm">
                                <div className="text-center">
                                    <div className="mb-2 mt-4">
                                        <h3 className="text-secondary mb-5">Update Product</h3>
                                    </div>
                                    {/* updating form */}
                                    <Form>
                                        {['title', 'price', 'description'].map((field) => (
                                            <Form.Group as={Row} key={field} className="mt-2 justify-content-center">
                                                <Form.Label column md={3} sm={12} className="py-3 text-secondary text-md-end text-start">
                                                    {field.toUpperCase()}
                                                </Form.Label>
                                                <Col md={6} sm={12}>
                                                    <Form.Control
                                                        className="border border-white p-2 rounded-3 mb-2"
                                                        type='text'
                                                        name={field}
                                                        value={info[field] || ''}
                                                        onChange={handlChange}
                                                        placeholder={`Enter your ${field.toLowerCase()}`}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        ))}
                                        <div className="mt-3">
                                            <Button variant="primary m-2" onClick={putData}>Update</Button>
                                            <Button variant="danger m-2" onClick={ret}>Cancel</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Update;
