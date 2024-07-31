import React, { useState } from 'react';
import Profile from '../Assets/profilepic.png';
import Exit from '../Buttons/CancelButton';
import EditButton from '../Buttons/EditButton';
import Save from '../Buttons/SaveButton';
import '../Css/Contentstyle.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/sidebar';
import Toggle from '../Toggle/Toggle';
import { Row, Col, Form } from 'react-bootstrap';

const MyProfile = () => {
    const initialValue = {
        Name: "", Email: "", Address: "", Age: "", Degree: "", Role: "", Skills: "", Specs: "",
    };
    const [formData, setFormData] = useState(initialValue);
    const [myName, setMyName] = useState("");
    const [myEmail, setMyEmail] = useState("");
    const [isEdit, setIsEdit] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    const saveData = () => {
        if(!isEdit){
        setMyName(formData.Name);
        setMyEmail(formData.Email)
        toggleEdit();
    }
    };

    const clearInputField = () => {
        if(!isEdit)
        setFormData(initialValue);
    };

    return (
        <Row className="m-0 p-0">
            <Col xl={2} lg={2} className="p-0 m-0 vh-100 shadow d-lg-block d-none">
                <Sidebar />
            </Col>
            <Col xl={10} lg={10} className="col-12 p-0 m-0">
                <div className='d-lg-none d-block shadow'><Toggle /></div>
                <div className="p-0 m-0">
                    <Row className="border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header Name={formData.Name} Email={formData.Email} />
                    </Row>
                    <Row className="innercontent d-flex flex-row p-0 m-0 mt-4 mb-3 bg-white border border-light shadow-sm border-opacity-25 rounded-3 mx-3">
                        <Col xl={3} lg={4} md={4} sm={12} className="mt-3 text-center">
                            <Row className="border border-light border-2 mx-xl-4 mx-lg-2 mx-md-2 mx-4 mt-2 rounded">
                                <img src={Profile} width={50} height={130} className="rounded-circle px-5 mt-2" alt="Cinque Terre" />
                                <h6 id='Name'>{myName ? myName : 'Guest'}</h6>
                                <p className="" id='email'><small>{myEmail}</small></p>
                            </Row>
                        </Col>
                        <Col xl={9} lg={8} md={8} sm={12} className="">
                            <form className='m-0 p-0' id='forms'>
                                <Row className='m-0 p-0'>
                                    <Col className="col-6 p-0 m-0 mt-3 fs-6 fw-semibold text-md-start text-center">Account Details</Col>
                                    <Col className="col-6 p-0 m-0 mt-2 fs-6 fw-semibold text-end">
                                        <EditButton IsEnable={toggleEdit} />
                                    </Col>
                                </Row>
                                <Row className="row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 g-2 mb-4 mt-3">
                                    {['Name', 'Email', 'Role', 'Age', 'Address', 'Degree', 'Specs', 'Skills'].map((field) => (
                                        <Col key={field} xl={4} lg={6} md={6} sm={12}>
                                            <Form.Group>
                                                <Form.Label className="fw-semibold">{field}</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name={field}
                                                    value={formData[field] || ''}
                                                    onChange={handleChange}
                                                    disabled={isEdit}
                                                    placeholder={`Enter your ${field.toLowerCase()}`}
                                                    className="mt-2 py-2 text-secondary text-opacity-50"
                                                />
                                            </Form.Group>
                                        </Col>
                                    ))}
                                </Row>
                            </form>
                            <div className='text-md-end text-center mb-2'>
                                <Save id="save" saveData={saveData} /> 
                                <Exit id="exit" clearInputField={clearInputField} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default MyProfile;
