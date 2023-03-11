import styled from "styled-components";

const HeaderStyled = styled.header`
  margin-top: 20px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  button {
    display: flex;
    gap: 10px;
    align-items: center;
    /* background-color: #af8484; */
    padding: 5px;
    border: 1px solid;
    border-radius: 10px;
    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export default HeaderStyled;
