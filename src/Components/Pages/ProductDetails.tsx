import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";
import { Col, Row, Spinner } from "react-bootstrap";
import '../Css/ProductInfo.css'; 
type Product ={
    id : number;
    title: string;
    price: number;    
    description: string;
    creationAt: string;
    updatedAt: string;
    images: [];
}
interface error{
    message: string;
}
const ProductInfo: React.FC = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<error | null>(null);
    
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

    if (loading) return <div className="spinner-container"><Spinner animation="border" variant="danger" /></div>;
    if (error) return <p className="text-center text-danger">Error fetching data: {error.message}</p>;
    if (!user) return <p className="text-center text-danger">Page Not Found</p>;

    return (
        <div className="product-info vh-100 d-flex flex-column">
            <Row className="m-0 p-0">
                <Col xl={2} lg={2} className="p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </Col>
                <Col xl={10} lg={10} className="p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    <div className="product-details p-2 mt-5 shadow-sm">
                        <h2 className="text-danger text-center mb-4 fw-bold fs-2">Product Details</h2>
                        <h3 className="mb-3 fs-4 text-center p-1">{user.title}</h3>
                        <div className="mb-1 text-center">
                            {user.images.map((image, index: number) => (
                                <img key={index} src={image} width={200} height={150} alt={`product_img_${index}`} className="m-1" />
                            ))}
                        </div>
                        <p className="mb-1"><strong>ID:</strong> {user.id}</p>
                       
                        <p className="mb-1"><strong>Price:</strong> ${user.price}</p>
                        <p className="mb-1 fs-5"><strong>Description:</strong> {user.description}</p>
                        <p className="mb-1"><strong>Creation Date:</strong> {new Date(user.creationAt).toLocaleString()}</p>
                        <p className="mb-1"><strong>Last Updated:</strong> {new Date(user.updatedAt).toLocaleString()}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductInfo;
