import { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import GoBack from "../../components/GoBack/GoBack";

const Person = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const loc = useLocation();
  const backLinkHref = loc.state?.from ?? `/`;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setItem(results);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Container>
        <GoBack backLinkHref={backLinkHref} />
        {item && <Card {...item} />}
      </Container>
    </>
  );
};

export default Person;
