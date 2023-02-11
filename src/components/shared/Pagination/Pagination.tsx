import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface IPagination {
  pageCount: number;
  pageRangeDisplayed?: number;
  handlePageClick: (selectedPage: number) => void;
}
const Pagination = ({
  pageCount,
  pageRangeDisplayed = 1,
  handlePageClick,
}: IPagination) => {
  const [itemOffset, setItemOffset] = useState(1);

  const onClick = (event: any) => {
    setItemOffset(event.selected + 1);
    handlePageClick(itemOffset);
  };

  return (
    <div className="flex justify-center items-center h-12 mt-2">
      <ReactPaginate
        containerClassName="pagination"
        activeClassName="paginationActive"
        breakLabel="..."
        nextLabel=">"
        onPageChange={onClick}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel="<"
      />
    </div>
  );
};

export default Pagination;
