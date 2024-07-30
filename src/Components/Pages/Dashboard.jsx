import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import Toggle from "../Toggle/Toggle";
import { Col, Row, Container, Card, Spinner } from 'react-bootstrap';
import '../Css/DashboardStyle.css';
import { useEffect, useState } from "react";


const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    if (loading)
        return <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100"><Spinner animation="border" /></h4>;

    return (
        <>
            <Row className="m-0 p-0">
                <Col xl={2} lg={2} className="p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </Col>
                <Col xl={10} lg={10} className='p-0 m-0'>
                    <Row className="border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </Row>
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    <Container fluid>
                    <Row className="d-flex flex-row-reverse m-0 mt-4 p-0">
                            <Col className="userprofile mt-3 rounded-2 fs-5 fw-semibold text-md-end text-center">
                                <Link className='text-decoration-none text-white' to="/dashboard/userProfile">
                                   <span className="bg-danger   shadow-sm p-3 rounded"> <i className="bi bi-person-fill"></i>  User Profiles >></span>
                                </Link>
                            </Col>
                        </Row>
                        <Row className=" row-cols-1  row-cols-md-2 row-cols-xl-4 g-4 mt-3">
                            
                            <Col>
                                <Link className=' text-decoration-none text-white fw-bold' to='/dashboard/themes'>
                                    <Card className="theme h-100 shadow-sm rounded text-center border-0">
                                    <Card.Body className="bg-white text-dark fw-bold  ">
                                        <Row>
                                            <Col  className="  text-secondary fw-normal  text-start ms-2 fs-5">Theme</Col>
                                            <Col className="text-end text-success fs-4">
                                            <i class="bi bi-suit-club-fill"></i>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col  className="  text-secondary  text-start ms-2 mt-3 fs-2">32</Col>
                                        <Col  className=" mt-4"></Col>
                                        </Row>
                                        </Card.Body>
                                    </Card></Link>
                            </Col>
                            <Col>
                            <Card className="theme h-100 shadow-sm rounded-2 text-center border-0">
                                    <Card.Body className="bg-white text-dark fw-bold  ">
                                        <Row>
                                            <Col  className="  text-secondary fw-normal   text-start ms-2 fs-5 ">Decks</Col>
                                            <Col className="text-end text-info fs-4">
                                            <i class="bi bi-suit-diamond-fill"></i>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col  className=" text-secondary  text-start ms-2 mt-3 fs-2">06</Col>
                                        <Col  className=" mt-4"></Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>
                            </Col>
                            <Col>
                            <Card className="theme h-100 shadow-sm rounded-4  text-center border-0">
                                    <Card.Body className="bg-white text-dark fw-bold  ">
                                        <Row>
                                            <Col  className=" text-secondary fw-normal  text-start ms-2 fs-5 ">Challenges</Col>
                                            <Col className="text-end text-danger fs-4">
                                            <i class="bi bi-suit-heart-fill"></i></Col>
                                        </Row>
                                        <Row>
                                        <Col  className="  text-secondary  text-start ms-2 mt-3 fs-2">03</Col>
                                        <Col  className=" mt-4"></Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>
                            </Col>
                            <Col>
                            <Card className="theme h-100 shadow-sm rounded-2 text-center border-0">
                                    <Card.Body className="bg-white text-dark fw-bold  ">
                                        <Row>
                                            <Col  className="   text-secondary  fw-normal  text-start ms-2 fs-5">Customers</Col>
                                            <Col className="text-end text-primary fs-4">
                                            <i class="bi bi-suit-spade-fill"></i></Col>
                                        </Row>
                                        <Row>
                                        <Col  className=" text-secondary  text-start ms-2 mt-3 fs-2">02</Col>
                                        <Col  className=" mt-4"></Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        </Row>
                       
                    </Container>
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;
