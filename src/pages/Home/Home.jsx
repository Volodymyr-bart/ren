import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import List from "../../components/List/List";
import Logo from "../../components/Logo/Logo";
import Pagination from "../../components/Pagination/Pagination";

import { useLocalStorage } from "../../hooks/useLocalStorage";

const Home = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useLocalStorage("search", "");

  const visibleItems = items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((posts) => {
        const { results, info } = posts;
        console.log(info);
        setItems(results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Logo />
      <SearchBox value={search} onChange={setSearch} />
      <List items={visibleItems} />
      <Pagination />
    </>
  );
};

export default Home;
