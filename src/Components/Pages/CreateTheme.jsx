import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/sidebar';
import Header from '../Header/Header';
import Toggle from '../Toggle/Toggle';
import Save from '../Buttons/SaveButton'
import Cancel from '../Buttons/CancelButton'
const ThemeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 d-lg-block d-none shadow">
          <Sidebar />
        </div>
        <div className="col-xl-10 col-lg-10 p-0 m-0">
          <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
            <Header />
          </div>
          <div className=' col-12 d-lg-none d-block shadow'><Toggle /></div>
          <div className='row m-0 p-2'>
            <div className="container mt-5 bg-white shadow-sm m-0 p-0">
              <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded">
                <Row className="mb-3">
                  <Form.Group controlId="coverImage" className="text-center ">
                    <Form.Label className="d-block">
                      <div className="border bg-info bg-opacity-25 border-dashed p-4 rounded">
                        <Button variant="outline-secondary">+ Add cover Image</Button>
                        <p className="text-muted">Upload only PNG and JPEG images</p>
                      </div>
                    </Form.Label>
                    <Form.Control type="file" name="coverImage" className="d-none" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="title">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter theme title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="subtitle">
                      <Form.Label>Subtitle</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter theme subtitle"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Enter theme description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-end">
                  <Col xs="auto">
                    <Save />
                    <Cancel />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeForm;
