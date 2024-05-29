import React, { useLayoutEffect } from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul>
      {pageNumber.map((number) => (
        <li key={number}></li>
      ))}
    </ul>
  );
};

export default Pagination;
