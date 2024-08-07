import React from 'react';
import Header from "../Components/Header/Header";
import Sidebar from "../Pages/sidebar";
import Toggle from "../Pages/Toggle";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/');
    }
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </div>
                <div className="col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    <div className='d-lg-none d-block shadow'>
                        <Toggle />
                    </div>
                    <div className="">
                        <h1 className="text-danger text-center mt-5 fw-bold">Page Not Found :(</h1>
                        <p className="text-center mt-3 fs-4">The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <div className="text-center mt-3">
                            <Button className="btn btn-primary" onClick={handleclick} >Go to Home</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
