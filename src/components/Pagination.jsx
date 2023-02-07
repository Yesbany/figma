import React from "react";
import { numbersPage } from "../utils/handlePagination";
import "./styles/Pagination.css"

const Pagination = ({setPage, location, RESIDENTS_FORPAGE}) => {
  return (
    <ul className="pagination">
      {numbersPage(location, RESIDENTS_FORPAGE)?.map((numberPage) => (
        <li className="pagination__item" onClick={() => setPage(numberPage)} key={numberPage}>
          {numberPage}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
