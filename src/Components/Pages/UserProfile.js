import '../Css/UsersStyle.css';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import { useEffect, useState } from 'react';
import { Button, Col, Row, Spinner, Table } from "react-bootstrap";
import Toggle from '../Toggle/Toggle';
import Swal from 'sweetalert2';
import moment from 'moment';
import { deleteProducts, getproducts } from './ApiCall';
import Paginate from './Paginate';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../Redux/TodoSlicer";
import { remove } from '../Redux/TodoSlicer';
const Users = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const recordsPerPage = 10;
  let deleteId = null;

  const dispatch = useDispatch();
  const data = useSelector(state => state.user.data);
  const loading = useSelector(state => state.user.isLoading);
  const error= useSelector(state => state.user.error);
  useEffect(() => {
    console.log(data);
    dispatch(fetchTodo())
    
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

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
     
      }
    });
  };

  // const onDelete = (id) => {
  //   deleteProducts(deleteId)
  //     .then(() => {
  //       const updatedData = data.filter(product => product.id !== deleteId);
  //       setFilteredData(updatedData);
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "Deleted Successfully",
  //         showConfirmButton: false,
  //         timer: 1500
  //       });
  //     })
  //     .catch(error => {
  //       error=error;
  //     });
  // };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = data.data.filter(product =>
      product.title.includes(value) ||                 
      product.id.toString().includes(value) ||
      product.price.toString().includes(value)
    );
    setFilteredData(filtered);
    setCurrentPage(0);
  };

  const firstIndex = currentPage * recordsPerPage;
  const lastIndex = firstIndex + recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(filteredData.length / recordsPerPage);

  if (loading)
    return <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100"><Spinner animation="border" /></h4>;
  if (error) return <p>Error Fetching data: {error.message}</p>;

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
          <div className="text-end container-fluid">
            <div className='row'>
              <Col md={6}>
                <div className="w-100 p-3 mt-3 position-relative">
                  <i className="search bi bi-search text-secondary fs-3"></i>
                  <input
                    className='searchbar w-100 ps-5 shadow-sm rounded-4 border-0 p-3' 
                    onChange={handleSearch}
                    type="text"
                    value={searchTerm}
                    placeholder="Search for names..."
                    title="Type in a name"
                  />
                </div>
              </Col>
              <Col className='d-none d-md-block'>
                <Link to="/userprofile/create">
                  <Button className='createButton border border-none shadow-sm mt-4 fw-semibold rounded-3 py-3'
                   variant='none'>+ Create Product</Button>
                </Link>
              </Col>
            </div>
            <div className="t1 table-responsive shadow mt-3">
              <Table bordered variant='border border-white'>
                <thead className='sticky-top shadow-sm text-center'>
                  <tr>
                    {['S.No', 'Products', 'Price', 'Creation Date', 'Creation Time', 'Actions'].map((field) => (
                      <th key={field} className='text-danger bg-light bg-opacity-100 rounded border border-white fs-6 p-2'>{field}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records.map((product, index) => (
                    <tr className='border-bottom ' key={product.id}>
                      <td className='text-center text-secondary'>{firstIndex + index + 1}</td>
                      <td className='text-center'>
                        <Link className="text-decoration-none text-secondary " to={`/userProfile/${product.id}`}>{product.title}</Link>
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
                        <Button onClick={() => dispatch(remove)} variant='none px-sm-1 px-0'>
                          <i className="bi bi-trash3-fill text-danger px-1 "></i>
                        </Button>
                        <Link className='px-1 ' to={`/userProfile/update/${product.id}`}><i className="edit bi bi-pencil-square "></i></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <Col className='d-md-none d-block text-center'>
                <Link to="/userprofile/create">
                  <Button className='bg-danger border border-none shadow-sm text-white mt-3 rounded-3 py-3' variant='none'>+ Create Product</Button>
                </Link>
              </Col>
            <div className='mt-3'>
              <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Users;

// import { useDispatch,useSelector } from "react-redux";
// import { fetchTodo } from "../Redux/TodoSlicer";
// import React, { useEffect } from 'react'
// const Users = () => {
//   const dispatch=useDispatch();
//   const data = useSelector(state => state.todo)
//   useEffect (() => {
//     dispatch(fetchTodo())
//   },[])
//   console.log(data);
//   return (
//     <div>
//       {
//         data.data.map(todo => {
//           return <p>{todo.title}</p>
//         })
//       }
//     </div>
//   )
// }

// export default Users