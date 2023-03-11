import { Item, PaginationList } from "./Pagination.styled";

const Pagination = ({ pages, paginate, currentPage }) => {
  const pageNumbers = [];
  if (pages) {
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <>
      {!!pages && (
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
