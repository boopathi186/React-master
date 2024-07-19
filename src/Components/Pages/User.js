import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";
import { Spinner } from "react-bootstrap";
const UserInfo = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${userId}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [userId]);
    if (loading) return <h4 className="d-flex mt-5 justify-content-center align-items-center vh-100"><Spinner animation="border" variant="danger" /></h4>;
    if (error) return <p className="text-center text-danger" >Error fetching data: {error.message}</p>;
    if (!user) return <p className="text-center text-danger" >Page Not Found</p>;

    return (
        <div>
            {/* Sidebar and Header */}
            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </div>
                <div className="col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    <div className='d-lg-none d-block shadow'><Toggle/></div>
                 
                    {/* To print details of the user */}
                  
                    <div className="text-center">
                        <h2 className="text-center text-danger mt-5">Product Details</h2>
                        <h3>{user.title}</h3>
                        <p>ID: {user.id}</p>
                        <p>Price: ${user.price}</p>
                        <p>Description: {user.description}</p>
                        <p>Creation Date: {new Date(user.creationAt).toLocaleString()}</p>
                        <p>Last Updated: {new Date(user.updatedAt).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserInfo;