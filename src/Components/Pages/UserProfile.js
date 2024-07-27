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

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0); // Updated for 0-based index
  const recordsPerPage = 10;
  let deleteId = null;

  const fetchData = () => {
    getproducts()
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const onDelete = (id) => {
    deleteProducts(deleteId)
      .then(() => {
        const updatedData = data.filter(product => product.id !== deleteId);
        setData(updatedData);
        setFilteredData(updatedData);
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
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
    console.log(event.selected);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = data.filter(product =>
      product.title.includes(value) ||                   //check if the  entered string are present in the table
      product.id.toString().includes(value) ||
      product.price.toString().includes(value)
    );
    setFilteredData(filtered);
    setCurrentPage(0); // Reset to the first page after filtering
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
          <div className="text-end container-fluid mt-5">
            <div className='row'>
              <Col>
                <div className=" w-100 p-3 mt-4 position-relative">
                <i class="search bi bi-search   text-secondary  fs-3"></i>
                  <input
                    className='searchbar w-100 ps-5  bg-white shadow rounded-4 border border-light p-3' 
                    onChange={handleSearch}
                    type="text"
                    value={searchTerm}
                    placeholder="Search for names..."
                    title="Type in a name"
                  />
                </div>
              </Col>
              <Col>
                <Link to="/userprofile/create">
                  <Button className='bg-danger border border-none shadow-sm text-white mt-5 rounded-3 py-3' variant='none'>+ Create Product</Button>
                </Link>
              </Col>
            </div>
            <div className="t1 table-responsive shadow mt-4">
              <Table bordered variant='border border-white'>
                <thead className='sticky-top shadow-sm text-center'>
                  <tr>
                    {['S.No', 'Products', 'Price', 'Creation Date', 'Creation Time', 'Actions'].map((field) => (
                      <th key={field} className='text-danger bg-light fs-6 p-3'>{field}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records.map((product, index) => (
                    <tr className='border-bottom' key={product.id}>
                      <td className='text-center text-secondary'>{firstIndex + index + 1}</td>
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
                          <i className="bi bi-trash3-fill text-danger px-1"></i>
                        </Button>
                        <Link to={`/userProfile/update/${product.id}`}><i className="edit bi bi-pencil-square"></i></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className='mt-4'>
              <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Users;
