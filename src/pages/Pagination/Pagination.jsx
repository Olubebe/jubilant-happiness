import React from 'react'
import './Pagination.css'

function Pagination({ totalPages, currentPage, onPageChange}){
  return(
    <div className='page__conatiner'>
        <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button key={i + 1} onClick={() => onPageChange(i + 1)}>
          {i + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
export default Pagination