import React from 'react';

const Pagination = ({ page, setPage }) => {
    return (
        <div className="pagination">
          <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
          <span>Page {page}</span>
          <button onClick={() => setPage(p => p + 1)}>Next</button>
        </div>
      );
      
};

export default Pagination;
