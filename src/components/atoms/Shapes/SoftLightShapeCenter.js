import styled from "styled-components";
import React from "react";

const StyledSoftLightShape = styled.svg`
  z-index: -1;
  position: absolute;
  width: 50%;
  left: calc(50vw - 25%);
  top: 15%;
`;

export const SoftLightShapeCenter = () => (
    <StyledSoftLightShape xmlns="http://www.w3.org/2000/svg" width="1187.024" height="472.91"
                          viewBox="0 0 1187.024 472.91">
        <path id="Path_49" data-name="Path 49"
              d="M400.93,0c253.355,0,784.377,476.757,503.227,472.887s-961.967-79.8-961.967-79.8C-486.836,362.624,147.575,0,400.93,0Z"
              transform="translate(202.919)" fill="#fff" opacity="0.05"/>
    </StyledSoftLightShape>
);