import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import Toggle from "../Toggle/Toggle";
import { Col, Row } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div>
            <Row className="row m-0 p-0">
                <Col xl={2} lg={2} className=" p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </Col>
                <Col xl={10} lg={10} className='p-0 m-0'>
                    <Row className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </Row>
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    <Row className="row-cols-xl-5 gap-2 d-flex m-2  mt-4 ">
                        <Col  className=" bg-secondary bg-opacity-25 p-5  shadow-sm rounded-2 fs-3">
                        <Link className='text-decoration-none text-dark' to='/dashboard/themes'>Themes</Link></Col>
                        <Col  className=" bg-danger bg-opacity-25 p-5  shadow-sm rounded-2 fs-3">Decks</Col>
                        <Col  className=" bg-success bg-opacity-25 p-5 shadow-sm rounded-2 fs-3">Challenges</Col>
                        <Col  className=" bg-primary bg-opacity-25 p-5  shadow-sm rounded-2 fs-3">Customers</Col>
                    </Row>
                </Col >
            </Row >
        </div >
    );

}
export default Dashboard;