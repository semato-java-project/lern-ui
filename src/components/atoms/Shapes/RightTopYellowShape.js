import React from "react";
import styled from "styled-components";

const StyledShape = styled.svg`
  z-index: 0;
  position: absolute;
  width: 170px;
  top: -10px;
  right: 0;
`;

export const RightTopYellowShape = () => (
    <StyledShape xmlns="http://www.w3.org/2000/svg" width="190" height="164" viewBox="0 0 190 164">
        <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#fd0"/>
                <stop offset="1" stopColor="#fc0"/>
            </linearGradient>
        </defs>
        <path id="top_right_shape"
              d="M.132,316.974c-67.523-8.6-112.646-13.052-112.646-13.052-133.658-11.8-101.05-90.323-15.034-163.459H.132C.132,197.844.132,294.592.132,316.974Z"
              transform="translate(202.539 -140.464)" fill="url(#linear-gradient)"/>
    </StyledShape>


);