import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Card, GoBackLink } from "./Person.styled";
const Person = () => {
  const [item, setItem] = useState([]);
  // const [isLoad, setisLoad] = useState(false);
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

  const { gender, name, image, species, status, origin, type } = item;
  // console.log(item);
  return (
    <>
      {item && (
        <Container>
          <GoBackLink to={backLinkHref}>
            <BiArrowBack style={{ width: "24px", height: "24px" }} />
            <p>GO BACK</p>
          </GoBackLink>

          <Card>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Informations</p>
            <ul>
              <li>
                <h3>Gender:</h3>
                <p>{gender}</p>
              </li>
              <li>
                <h3>Status:</h3>
                <p>{status}</p>
              </li>
              <li>
                <h3>Species:</h3>
                <p>{species}</p>
              </li>
              <li>
                <h3>Origin:</h3>
                <p>{origin?.name}</p>
              </li>
              <li>
                <h3>Type:</h3>
                <p>{type ? type : "Unknown"}</p>
              </li>
            </ul>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Person;
