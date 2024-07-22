import myprofile from '../Assets/myprofile.png';
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import { Link, NavLink } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
import { Col,Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Row className="m-0 p-0">
                <Col xl={2} lg={2} className=" p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </Col>
                <Col xl={10} lg={10} className="p-0 m-0">
                    <Row className="border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </Row>
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    <div className="mt-5">
                        <h1 className="text-center text-danger">...  Welcome to my Home  ...</h1>
                    </div>
                    {/* user profile */}
                    <Row className=" d-flex flex-row   m-0 mx-2 mt-4">
                        <Col className=" bg-white bg-opacity-25 p-5 mx-2 shadow rounded-2 fs-3">
                            <NavLink className='text-decoration-none text-dark' to="/userProfile">
                                <img className="" src={myprofile} width={25} height={25} alt='profile_img' /> User Profiles
                            </NavLink>
                        </Col>
                        <Row className="row-cols-xl-5 gap-2 d-flex m-2  mt-4 ">
                        <Col  className=" bg-secondary bg-opacity-25 p-5  shadow-sm rounded-2 fs-3">
                        <Link className='text-decoration-none text-dark' to='/home/themes'>Themes</Link></Col>
                        <Col  className=" bg-danger bg-opacity-25 p-5  shadow-sm rounded-2 fs-3">Decks</Col>
                        <Col  className=" bg-success bg-opacity-25 p-5 shadow-sm rounded-2 fs-3">Challenges</Col>
                        <Col  className=" bg-primary bg-opacity-25 p-5  shadow-sm rounded-2 fs-3">Customers</Col>
                    </Row>
                    </Row>
                   
                </Col>
            </Row>
        </div>
    );
}
export default Home;