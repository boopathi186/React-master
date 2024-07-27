import React from 'react';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paginate = ({ pageCount, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel=" . . . "
        breakClassName='text-danger fw-bold'
        nextLabel="Next >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={9}
        pageCount={pageCount}
        
        previousLabel="<< Previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination  justify-content-center'
        pageClassName='page-item '
        pageLinkClassName='page-link text-danger border-0' 
        previousLinkClassName='page-link text-danger border-0 fw-bold shadow-none bg-white mx-2'
        previousClassName='page-item text-danger  '
        nextClassName='page-item  text-danger'
        nextLinkClassName='page-link text-danger fw-bold  border-0  shadow-none bg-white mx-2'
        activeClassName='active'
        activeLinkClassName='page-link bg-danger fs-5  border border-none rounded-5 text-white shadow-none'
      />
    </div>
  );
};

export default Paginate;
