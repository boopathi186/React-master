import '../Css/UsersStyle.css';
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import { useEffect, useState } from 'react';
import { Button, Row, Spinner, Table } from "react-bootstrap";
import Toggle from '../Toggle/Toggle';
import Swal from 'sweetalert2';
import moment from 'moment';
import { deleteProducts, getproducts } from './ApiCall';

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let deleteId = null;

  const handleShow = (id) => {
    deleteId = id;
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
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    getproducts()
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
    deleteProducts(deleteId)
      .then(() => {
        setData(data.filter(product => product.id !== deleteId));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        setError(error);
      });
    navigate('/dashboard/userProfile');
  };

  // Page Loading
  if (loading)
    return <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100"> <Spinner animation="border" /></h4>
  if (error) return <p> Error Fetching data: {error.message}</p>

  return (
    <div>
      <Row className="m-0 p-0">
        <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
          <Sidebar />
        </div>
        <div className="col-12 col-xl-10 col-lg-10 p-0 m-0">
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
              <Table bordered variant='border border-white m-'>
                <thead className='sticky-top shadow-sm  text-center'>
                  <tr className=''>
                    {['S.No','Products_Id', 'Products', 'Price', 'Creation Date', 'Creation Time', 'Actions'].map((field) => (
                      <th key={field} className='text-danger bg-light  fs-5 p-3'>{field}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((product, index) => (
                    <tr className='border-bottom' key={product.id}>
                      <td className='text-center text-secondary'>{index + 1}</td>
                      <td className='text-center'>
                        <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>{product.id}</Link>
                      </td>
                      <td className='text-center'>
                        <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>{product.title}</Link>
                      </td>
                      <td className='text-center'>
                        <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}><span className='fw-bold'>$</span> {product.price}</Link>
                      </td>
                      <td className='text-center'>
                        <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>{moment(product.createdAt).format('LL')}</Link>
                      </td>
                      <td className='text-center'>
                        <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>{moment(product.createdAt).format('LT')}</Link>
                      </td>
                      <td className='text-center'>
                        <Button onClick={() => handleShow(product.id)} variant='none'>
                          <i className="bi bi-trash3-fill text-danger px-3"></i>
                        </Button>
                        <Link to={`/userProfile/update/${product.id}`}><i className="edit bi bi-pencil-square"></i></Link>
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
