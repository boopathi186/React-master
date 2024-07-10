import { Button } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";


const Theme = () => {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow">
                    <Sidebar />
                </div>
                <div className="col-xl-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header /> 
                    </div>
                    <div className="row m-0 p-0 mt-4">
                        <Button variant="danger w-25 mx-4" >+Create Theme</Button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
export default Theme;