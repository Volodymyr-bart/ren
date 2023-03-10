import { Link } from "react-router-dom";
import { StyledList, TextStyled } from "./List.styled";

const List = ({ items }) => {
  return (
    <>
      <StyledList>
        {items.map((item) => (
          <li key={`${item.id}`}>
            <Link to={`/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <div>
                <TextStyled text={item.name} length={18}></TextStyled>
                <p>{item.species}</p>
              </div>
            </Link>
          </li>
        ))}
      </StyledList>
    </>
  );
};

export default List;
