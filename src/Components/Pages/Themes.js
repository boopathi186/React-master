import { Button, Col } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import Toggle from "../Toggle/Toggle";


const Theme = () => {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 d-lg-block d-none shadow">
                    <Sidebar />
                </div>
                <div className="col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    <div className=' col-12 d-lg-none d-block shadow'><Toggle/></div>
                    <div className="row m-0 p-0 mt-4">
                       <Col className="col-12"><Button variant="danger text-center mx-4" >+Create Theme</Button></Col> 
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Theme;