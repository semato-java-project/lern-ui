import React from "react";
import styled from "styled-components";

const StyledBackground = styled.svg`
      display: flex;
      z-index: -2;
      top: 0;
      left: 0;
      position:relative;
      width: 100%;
  
      @media not (-ms-high-contrast: active), (-ms-high-contrast: none)) {
        height: auto;
      }  
`;

export const HomeBackgroundShape = () => (
    <StyledBackground xmlns="http://www.w3.org/2000/svg" width="1920" height="572.362" viewBox="0 0 1920.036 572.362">
        <path id="Path_2" data-name="Path 2"
              d="M1901.313,1750.9,185.818,1609.789S-1.513,1602.4-18.687,1481.906c0-13.426.071-25.537,0-37.187-.126-20.654.126-40.152,0-57.42.016-61.553,0-208.763,0-208.763h1920Z"
              transform="translate(18.724 -1178.536)" fill="#252b69"/>
    </StyledBackground>
);