import styled from "styled-components";

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  @media screen and (min-width: 480px) {
    width: 480px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1068px;
  }
`;
