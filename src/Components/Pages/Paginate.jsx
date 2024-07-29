import React from 'react';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paginate = ({ pageCount, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel=" . . . "
        breakClassName='text-danger fw-bold'
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName='pagination  justify-content-center '
        pageClassName='page-item '
        pageLinkClassName='page-link text-danger  shadow-sm d-md-block d-none ' 
        previousLinkClassName='page-link text-danger border-white rounded-3 fw-bold shadow bg-light mx-2'
        previousClassName='page-item text-danger  '
        nextClassName='page-item  text-danger'
        nextLinkClassName='page-link text-danger  border-white rounded-3 fw-bold shadow bg-light mx-2'
        activeClassName='active'
        activeLinkClassName='page-link fs-5 bg-info bg-opacity-75 text-white  rounded-5 text-primary border-0 shadow-none'
      />
    </div>
  );
};

export default Paginate;
