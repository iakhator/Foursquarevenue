import React from 'react'

function Pagination ({ venuePerPage, totalVenues, paginate, currentPage}) {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalVenues/venuePerPage); i++) {
    pageNumbers.push(i)
  }
  return(
    <ul className="pagination">
      {
        pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="\#" className={`page-link ${currentPage === number ? 'active' : ''}`}>
              {number}
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default Pagination
