import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoBackLink = styled(Link)`
  position: absolute;
  top: 24px;
  left: 24px;

  display: flex;
  gap: 12px;

  color: #000000;
  align-items: center;
  @media screen and (min-width: 1200px) {
    left: 50px;
  }
`;
