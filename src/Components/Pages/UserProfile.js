import '../Css/UsersStyle.css';
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button,  Row, Spinner, Table } from "react-bootstrap";
import Toggle from '../Toggle/Toggle';
import Swal from 'sweetalert2';
import moment from 'moment';
const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let deleteId=null;
  const handleShow = (id) => {
    deleteId=id;
    Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      onDelete(id);
    }
  }); };
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
  

  const onDelete = (id) => {
    axios.delete(`https://api.escuelajs.co/api/v1/products/${deleteId}`)
      .then(() => {
        setData(data.filter(product => product.id !== deleteId));
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
                <thead className='sticky-top text-center'>
                  <tr className='' >
                    {['S.No', 'Products', 'Price', 'Creation Date','Creation Time', 'Actions'].map((field) => (
                      <th key={field} className='text-danger  bg-light fs-5 p-4 '>{field}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map(data => (
                    <tr className='border-bottom ' key={data.id}>
                      <td className='text-start'>   <Link className="text-decoration-none text-dark " to={`/userProfile/${data.id}`}>{data.id}</Link></td>
                      <td className='text-center'>  <Link className="text-decoration-none text-dark " to={`/userProfile/${data.id}`}>{data.title}</Link></td>
                      <td className='text-center'>  <Link className="text-decoration-none  text-dark " to={`/userProfile/${data.id}`}><span className='fw-bold'>$</span> {data.price}</Link> </td>
                      <td className='text-center'>  <Link className="text-decoration-none  text-dark " to={`/userProfile/${data.id}`}>{moment(data.createdAt).format('LL')}</Link> </td>
                      <td className='text-center'>  <Link className="text-decoration-none  text-dark " to={`/userProfile/${data.id}`}>{moment(data.createdAt).format('LT')}</Link> </td>
                      {/* delete */}
                      {/* delete */}
                      <td className='text-center'>
                        <Button onClick={() => handleShow(data.id)} variant='none'>
                        <i className="bi bi-trash3-fill text-danger px-3"></i></Button>
                        {/* edit */}
                        <Link to={`/userProfile/update/${data.id}`}><i className=" edit bi bi-pencil-square"></i></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

          </div>
        </div>
      </Row>
    </div>
  );
}
export default Users;