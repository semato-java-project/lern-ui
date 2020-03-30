import React from "react";
import styled from "styled-components";


const StyledIcon = styled.svg`
  z-index: 2;
  position: absolute;
  width: 6rem;
  height: 6rem;
  left: calc(50% - 3rem);
  top: -3rem;
`;

export const PersonIcon = () => (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 95 95">
        <g id="person_Icon" data-name="person Icon" transform="translate(-0.305 -0.136)">
            <circle id="Ellipse_1" data-name="Ellipse 1" cx="47.5" cy="47.5" r="47.5" transform="translate(0.305 0.136)" fill="#f6f8fa"/>
            <g id="person-24px_1_" data-name="person-24px (1)" transform="translate(16.634 16.768)">
                <path id="Path_48" data-name="Path 48" d="M24.1,24.1A10.048,10.048,0,1,0,14.048,14.048,10.045,10.045,0,0,0,24.1,24.1Zm0,5.024C17.389,29.12,4,32.486,4,39.168v5.024H44.192V39.168C44.192,32.486,30.8,29.12,24.1,29.12Z" transform="translate(7.198 7.198)" fill="#3c4bad"/>
                <path id="Path_49" data-name="Path 49" d="M0,0H62.589V62.589H0Z" fill="none"/>
            </g>
        </g>
    </StyledIcon>


);