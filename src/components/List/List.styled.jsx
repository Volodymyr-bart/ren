import EllipsisText from "react-ellipsis-text";
import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  row-gap: 32px;

  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;

  li {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    a {
      display: flex;
      flex-direction: column;
      img {
        height: 232px;
      }
      div {
        margin: 12px auto 12px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        /* h3 {
          background-color: #bd2020;
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 0.15px;
          color: rgba(0, 0, 0, 0.87);

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        } */

        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: 0.25px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 200px);
    column-gap: 20px;
    li {
      img {
        height: 168px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 226px);
    column-gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 240px);
    column-gap: 20px;
  }
`;

export const TextStyled = styled(EllipsisText)`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;
