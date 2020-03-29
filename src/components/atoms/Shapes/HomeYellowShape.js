import React from "react";
import styled from "styled-components";

const StyledYellowShape = styled.svg`
  z-index: 0;
  position: absolute;
  width: 45%;
  left: calc(50vw - 22.5%);
  top: 17%;
`;

export const HomeYellowShape = () => (
    <StyledYellowShape xmlns="http://www.w3.org/2000/svg" width="1107.602" height="554.107"
                       viewBox="0 0 1107.602 554.107">
        <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#fd0"/>
                <stop offset="1" stopColor="#fc0"/>
            </linearGradient>
        </defs>
        <path id="yellow_shape"
              d="M360.527,0c236.4,0,731.895,558.614,469.557,554.079s-897.6-93.5-897.6-93.5C-467.84,424.884,124.124,0,360.527,0Z"
              transform="translate(202.919)" fill="url(#linear-gradient)"/>
    </StyledYellowShape>

);