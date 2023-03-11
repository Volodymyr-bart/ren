import styled from "styled-components";
import Rick_Morty_1 from "./../../images/Rick_Morty_1.png";
import Rick_Morty_2x from "./../../images/Rick_Morty_2x.png";

export const StyledLogo = styled.div`
  margin: 86px auto 16px;
  width: 312px;
  height: 104px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${Rick_Morty_1});
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 3dppx) {
    background-image: url(${Rick_Morty_2x});
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
    height: 200px;
    background-image: url(${Rick_Morty_1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 3dppx) {
      background-image: url(${Rick_Morty_2x});
    }
  }
`;
