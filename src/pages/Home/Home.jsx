import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import List from "../../components/List/List";
import Logo from "../../components/Logo/Logo";
import Pagination from "../../components/Pagination/Pagination";

import { useLocalStorage } from "../../hooks/useLocalStorage";

const Home = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useLocalStorage("search", "");
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let visibleItems = [];
  if (items) {
    visibleItems = items
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));
  }

  useEffect(() => {
    const templatePage = `${currentPage ? `page=${currentPage}` : ``}`;
    const templateName = `${search ? `name=${search}` : ``}`;
    const symbol = templatePage || templateName ? "?" : "";
    const and = templatePage || templateName ? "&" : "";
    fetch(`https://rickandmortyapi.com/api/character${symbol}${templateName}${and}${templatePage}`)
      .then((response) => response.json())
      .then((posts) => {
        if (posts) {
          const { results, info } = posts;
          setPages(info.pages);
          setItems(results);
        }
      })
      .catch((error) => console.log(error));
  }, [search, currentPage]);

  return (
    <>
      <Logo />
      <SearchBox value={search} onChange={setSearch} />
      <List items={visibleItems} />
      <Pagination pages={pages} currentPage={currentPage} paginate={paginate} />
    </>
  );
};

export default Home;
