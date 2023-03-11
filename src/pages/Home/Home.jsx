import { useEffect, useState } from "react";
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
  if (items) {
    visibleItems = items
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));
  }

  useEffect(() => {
    const templatePage = `${currentPage ? `page=${currentPage}` : ""}`;
    const templateName = `${search ? `name=${search}` : ""}`;
    const symbol = templatePage || templateName ? "?" : "";
    const and = templatePage || templateName ? "&" : "";
    fetch(`${URL}${symbol}${templateName}${and}${templatePage}`)
      .then((response) => response.json())
      .then((posts) => {
        if (posts) {
          console.log("posts", posts);
          const { results, info, error } = posts;
          if (info === "undefined") {
            setPages(0);
          }
          console.log(error);
          // console.log(info.pages);
          console.log(info);
          // setPages(info?.pages ? info.pages : "Undefind");
          setPages(info.pages);
          setItems(results);
          console.log(results);
        }
      })
      .catch((error) => setErrors(error.message));
  }, [search, currentPage]);

  // console.log("errors", errors);

  return (
    <>
      <Logo />
      <SearchBox value={search} onChange={setSearch} />
      <List items={visibleItems} />
      {pages && <Pagination pages={pages} currentPage={currentPage} paginate={paginate} />}
    </>
  );
};

export default Home;
