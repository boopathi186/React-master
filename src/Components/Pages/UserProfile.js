import '../Css/UsersStyle.css';
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Row, Spinner, Table } from "react-bootstrap";
import Toggle from '../Toggle/Toggle';
import Swal from 'sweetalert2';
import moment from 'moment';
const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setDeleteId(id);
    setShow(true);

  };
   const navigate= useNavigate();
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products/')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
    
  }, []); 
  

  const onDelete = () => {
    axios.delete(`https://api.escuelajs.co/api/v1/products/${deleteId}`)
      .then(() => {
        setData(data.filter(product => product.id !== deleteId));
        handleClose();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        setError(error);
        handleClose();
      }); 
      navigate('/userProfile');
  };

  // Page Loading
  if (loading)
    return <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100"> <Spinner animation="border" /></h4>
  if (error) return <p> Error Fetching data: {error.message}</p>

  return (
    <div>

      <Row className=" m-0 p-0">
        <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
          <Sidebar />
        </div>
        <div className=" col-12 col-xl-10 col-lg-10 p-0 m-0">
          <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
            <Header />
          </div>
          <div className='d-lg-none d-block shadow'><Toggle /></div>
          {/* To iterate the user details using map*/}
          <div className="text-end container-fluid mt-4">
            <Link to="/userprofile/create">
              <Button className='bg-danger border border-none shadow-sm text-white m-2 rounded-3' variant='none'> + Create Product</Button>
            </Link>
            <div className="mt-3 t1 table-responsive shadow">
              <Table  bordered variant='border border-white m-'>
                <thead className='sticky-top'>
                  <tr className='text-center ' >
                    {['S_No', 'Products', 'Price', 'Created Date', 'Actions'].map((field) => (
                      <th key={field} className='text-danger bg-light fs-5 p-4 '>{field}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map(data => (
                    <tr className='text-start border-bottom ' key={data.id}>
                      <td>   <Link className="text-decoration-none text-dark" to={`/userProfile/${data.id}`}>{data.id}</Link></td>
                      <td>  <Link className="text-decoration-none text-dark  " to={`/userProfile/${data.id}`}>{data.title}</Link></td>
                      <td>  <Link className="text-decoration-none  text-dark " to={`/userProfile/${data.id}`}><span className='text-success fw-bold'>$</span> {data.price}</Link> </td>
                      <td>  <Link className="text-decoration-none  text-dark " to={`/userProfile/${data.id}`}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</Link> </td>
                      {/* delete */}
                      <td className='text-center'>
                        <Button onClick={() => handleShow(data.id)} variant='none'>
                        <i className="bi bi-trash3-fill text-danger px-3"></i></Button>
                        {/* edit */}
                        <Link to={`/userProfile/update/${data.id}`}><i className="bi bi-pencil-square"></i></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

          </div>
        </div>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Users;