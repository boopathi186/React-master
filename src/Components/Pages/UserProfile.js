import '../Css/UsersStyle.css';
import Delete from '../Assets/delete.png';
import Edit from '../Assets/Edit.png';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Spinner, Table } from "react-bootstrap";
const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const onDelete = (id) => {
    axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(() => {
       
        setData(data.filter(product => product.id !== id));
         handleShow();
      })
  }
  //  page Loading
  if (loading)
    return <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100">Loading<Spinner animation="border" variant="danger" /></h4>
  if (error) return <p>Error Fetching data: {error}</p>


  return (
    <div>

      <div className="row m-0 p-0">
        <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
          <Sidebar />
        </div>
        <div className=" col-12 col-xl-10 col-lg-10 p-0 m-0">
          <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
            <Header />
          </div>
          {/* To iterate the user details using map*/}

          <div className="container mt-4">
          <Link to="/userprofile/create">
            <Button className='bg-danger text-white m-2' variant='none'> + Create user</Button>
          </Link>
          <div className=" t1 table-responsive">
            <Table striped bordered>
              <thead className='sticky-top'>
                  <tr>
                    <th className='text-danger'>#id</th>
                    <th className='text-danger'>Products</th>
                    <th className='text-danger'>Price</th>
                    <th className='text-danger'>Purchasing Time</th>
                    <th className='text-danger'>Delete</th>
                    <th className='text-danger'>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(data => (

                    <tr key={data.id}>
                      <td>   <Link className="text-decoration-none text-dark" to={`/userProfile/${data.id}`}>{data.id}</Link></td>
                      <td>  <Link className="text-decoration-none   " to={`/userProfile/${data.id}`}>{data.title}</Link></td>
                      <td>  <Link className="text-decoration-none  text-dark " to={`/userProfile/${data.id}`}>{data.price}</Link> </td>
                      <td>  <Link className="text-decoration-none  text-dark " to={`/userProfile/${data.id}`}>{data.creationAt}</Link> </td>
                      <td className='text-center'> <Button onClick={()=>onDelete(data.id)} variant='none'><Link to={'/userProfile'}>
                      </Link><img src={Delete} width={15} height={15} alt='delete_img'></img></Button></td>
                      <td className='text-center'> <Link to={`/userProfile/update/${data.id}`}> <img src={Edit} width={15} height={15} alt='delete_img'></img></Link> </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

          </div>
        </div>
      </div> 
      <Modal variant='danger text-white' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Item Deleted Successfully..</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Users;