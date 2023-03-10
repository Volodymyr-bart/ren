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

export const Card = styled.div`
  margin: 124px auto 0;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    width: 150px;
    height: 150px;
    border: 5px solid #f2f2f7;
    border-radius: 50%;
  }
  h2 {
    align-self: center;
    margin-top: 34px;

    font-weight: 400;
    font-size: 32px;
    line-height: 38px;

    color: #081f32;
    text-align: center;
  }
  p {
    margin-top: 35px;

    text-align: start;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;

    color: #8e8e93;
  }

  ul {
    margin-top: 16px;

    display: flex;
    flex-direction: column;
    gap: 9px;
    li {
      h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.15px;
        color: #081f32;
      }
      p {
        margin-top: 6px;

        text-align: start;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;
        letter-spacing: 0.25px;
        color: #6e798c;
      }
      p::after {
        content: "";
        margin-top: 17px;
        width: 100%;
        height: 1px;

        display: block;
        background: rgba(33, 33, 33, 0.08);
      }
    }
  }
  @media screen and (min-width: 1200px) {
    margin: 76px auto 0;
    img {
      width: 300px;
      height: 300px;
    }
    h2 {
      margin-top: 16px;

      font-size: 48px;
      line-height: 56px;
    }
    p {
      margin-top: 48px;

      text-align: center;
    }
    ul {
      margin-top: 48px;

      display: flex;
      flex-direction: column;
      gap: 9px;
      li {
        p {
          margin-top: 6px;

          text-align: start;
        }
      }
    }
  }
`;
