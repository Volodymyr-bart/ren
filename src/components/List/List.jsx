import { Link } from "react-router-dom";
import { StyledList } from "./List.styled";

const List = ({ items }) => {
  return (
    <>
      <StyledList>
        {items.map((item) => (
          <li key={`${item.id}`}>
            <Link to={`/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
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
