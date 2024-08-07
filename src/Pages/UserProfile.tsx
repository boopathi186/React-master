import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button, Col, Row, Spinner, Table } from "react-bootstrap";
import { useGetProductsQuery, useDeleteProductMutation } from '../Redux/ApiSlice';
import Header from "../Components/Header/Header";
import Sidebar from "./sidebar";
import Toggle from './Toggle';
import Paginate from './Paginate';
import Swal from 'sweetalert2';
import moment from 'moment';
import '../Css/UsersStyle.css';
import React from 'react';

type Tables = {
  title: string;
  price: number;
  id: number;
  description: string;
  createdAt: string;

}
type tableValue = Tables[];
const Users = () => {

  const [searchTerm, setSearchTerm] = useState<string>();
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState<tableValue>([]);

  //FOR PAGINATION
  const recordsPerPage = 10;
  const firstIndex = currentPage * recordsPerPage;                        // 0 * 10 = 0
  const lastIndex = firstIndex + recordsPerPage;                         // 0 + 10 = 10
  const records = filteredData.slice(firstIndex, lastIndex);             // slice(0,10)
  const pageCount = Math.ceil(filteredData.length / recordsPerPage);       // ceil(40/10) => 4 pages in the table

  const { data, isLoading, refetch } = useGetProductsQuery([]);
  const [deleteProduct] = useDeleteProductMutation();
  useEffect(() => {
    refetch()
    if (data) {
      setFilteredData(data);
    }
  }, [data, refetch]);

  //to delete a item
  const handledelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
      
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
        setFilteredData(filteredData.filter(product => product.id !== id));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  };
  // DELETE METHOD 
  // const onDelete = (id) => 
 //      deleteProduct(id);
  //     setFilteredData(filteredData.filter(product => product.id !== id));
  // Swal.fire({
  //   position: "center",
  //   icon: "success",
  //   title: "Deleted Successfully",
  //   showConfirmButton: false,
  //   timer: 1000
  // });

  // };
  // SERACH AN ELEMENTS IN THE TABLE
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (data) {
      const filtered = data.filter((product: Tables) =>
        product.title.includes(value) ||
        product.id.toString().includes(value) ||
        product.price.toString().includes(value)
      );
      setFilteredData(filtered);
      setCurrentPage(0);
    }
  };
  // TO DISPLAY THE CURRENT ACTIVE TABL PAGE
  const handlePageClick = (event: { selectedPage: number; selected: number }) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
  };
  return (
    <div>
      {isLoading ? (
        <h4 className="d-flex text-danger mt-5 justify-content-center align-items-center vh-100">
          <Spinner animation="border" />
        </h4>
      ) : (
        <Row className="m-0 p-0">
          <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
            <Sidebar />
          </div>
          <div className="col-12 col-xl-10 col-lg-10 p-0 m-0">
            <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
              <Header />
            </div>
            <div className='d-lg-none d-block shadow'>
              <Toggle />
            </div>
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
                    <Button className='createButton border border-none shadow-sm mt-4 fw-semibold rounded-3 py-3' variant='none'>
                      + Create Product
                    </Button>
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
                    {records.length > 0 ?
                      (
                        records.map((product: Tables, index) => (
                          <tr className='border-bottom ' key={product.id}>
                            <td className='text-center text-secondary'>{firstIndex + index + 1}</td>
                            <td className='text-center'>
                              <Link className="text-decoration-none text-secondary " to={`/userProfile/${product.id}`}>{product.title}</Link>
                            </td>
                            <td className='text-center'>
                              <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>
                                <span className='fw-bold'>$</span> {product.price}
                              </Link>
                            </td>
                            <td className='text-center'>
                              <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>{moment().format('LL')}</Link>
                            </td>
                            <td className='text-center'>
                              <Link className="text-decoration-none text-secondary" to={`/userProfile/${product.id}`}>{moment().format('LT')}</Link>
                            </td>
                            <td className='text-center'>
                              <Button onClick={() => handledelete(product.id)} variant='none px-sm-1 px-0'>
                                <i className="bi bi-trash3-fill text-danger px-1 "></i>
                              </Button>
                              <Link className='px-1 ' to={`/userProfile/update/${product.id}`}>
                                <i className="edit bi bi-pencil-square "></i>
                              </Link>
                            </td>
                          </tr>
                        ))
                      ) :
                      (
                        <tr>
                          <td colSpan={6} className="text-center text-danger">
                            No matches found
                          </td>
                        </tr>
                      )}
                  </tbody>
                </Table>
              </div>
              <Col className='d-md-none d-block text-center'>
                <Link to="/userprofile/create">
                  <Button className='bg-danger border border-none shadow-sm text-white mt-3 rounded-3 py-2 ' variant='none'>
                    + Create Product
                  </Button>
                </Link>
              </Col>
               {/* props for pagination */}
              <div className='mt-3'>
                <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
              </div>
            </div>
          </div>
        </Row>
      )}
    </div>
  );
};

export default Users;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodo } from '../Redux/TodoSlicer';

// const Users = () => {
//   const dispatch = useDispatch();
//   const { data, isLoading, error } = useSelector((state) => state.user);

//   useEffect(() => {
//     dispatch(fetchTodo());
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching data.</p>;

//   return (
//     <div>
//       {data.map((todo) => (
//         <p key={todo.id}>{todo.title}</p>
//       ))}
//     </div>
//   );
// };

// export default Users;
