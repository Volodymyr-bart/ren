import { CardStyled } from "./Card.styled";

const Card = ({ gender, name, image, species, status, origin, type }) => {
  return (
    <CardStyled>
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
    </CardStyled>
  );
};

export default Card;
