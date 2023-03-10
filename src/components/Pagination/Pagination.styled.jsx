import styled from "styled-components";

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  text-align: center;

  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 30%;
  color: ${(p) => {
    return p.active ? " black" : "white";
  }};
  background-color: ${(p) => {
    return p.active ? "red" : " #8E8E93;";
  }};
`;
