import { useEffect, useRef, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import List from "../../components/List/List";
import Logo from "../../components/Logo/Logo";
import Pagination from "../../components/Pagination/Pagination";

import { useLocalStorage } from "../../hooks/useLocalStorage";
const URL = "https://rickandmortyapi.com/api/character";

const Home = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useLocalStorage("search", "");
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [errors, setErrors] = useState(false);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let visibleItems = [];
  const prevSearchRef = useRef(null);
  if (items) {
    visibleItems = items
      .filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase()))
      .sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));
  }

  useEffect(() => {
    setErrors(false);
    if (prevSearchRef.current !== null && prevSearchRef.current !== search) {
      setCurrentPage(1);
    }
    prevSearchRef.current = search;

    const templatePage = `${currentPage ? `page=${currentPage}` : ""}`;
    const templateName = `${search ? `name=${search}` : ""}`;
    const symbol = templatePage || templateName ? "?" : "";
    const and = templatePage || templateName ? "&" : "";
    fetch(`${URL}${symbol}${templateName}${and}${templatePage}`)
      .then((response) => response.json())
      .then((posts) => {
        if (posts) {
          const { results, info, error } = posts;
          if (error) {
            setErrors(error);
            setPages(0);
          }
          setPages(info.pages);
          setItems(results);
        }
      })
      .catch((error) => console.log(error.message));
  }, [search, currentPage]);

  return (
    <>
      <Logo />
      <SearchBox value={search} onChange={setSearch} />
      {errors ? <div>{errors}</div> : <List items={visibleItems} />}
      <Pagination pages={pages} currentPage={currentPage} paginate={paginate} />
    </>
  );
};

export default Home;
