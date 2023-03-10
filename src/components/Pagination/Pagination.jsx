// import { Link } from "react-router-dom";
import { Item, PaginationList } from "./Pagination.styled";

const Pagination = ({ pages, paginate, currentPage }) => {
  const pageNumbers = [];
  if (pages) {
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }
    // if (pages < 10) {
    //   for (let i = 1; i <= pages; i++) {
    //     pageNumbers.push(i);
    //   }
    // }
    // if (pages > 10) {
    //    pageNumbers = [];
    //   // for (let i = 1; i <= pages; i++) {
    //   //   pageNumbers.push(i);
    //   // }
    // }
  }

  return (
    <>
      {pageNumbers && (
        <PaginationList>
          {pageNumbers.map((number) => (
            <Item
              key={number}
              onClick={() => paginate(number)}
              active={currentPage === number ? "active" : ""}>
              {number}
            </Item>
          ))}
        </PaginationList>
      )}
    </>
  );
};

export default Pagination;
