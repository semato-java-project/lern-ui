import React from "react";
import styled from "styled-components";

export const Circle = styled.svg`
  display: flex;
  width: ${({width}) => width || '20px'};
  height: ${({height}) => height || '20px'};
`;

export const CircleIcon = ({width,height, outsideColor, insideColor}) => (
    <Circle xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20">
            <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#FFDD00"/>
                            <stop offset="1" stopColor="#FFCC00"/>
                    </linearGradient>
            </defs>
            <g id="Group_132" data-name="Group 132" transform="translate(-703 -290)">
                    <circle id="Ellipse_12" data-name="Ellipse 12" cx="10" cy="10" r="10" transform="translate(703 290)" fill={outsideColor}/>
                    <circle id="Ellipse_13" data-name="Ellipse 13" cx="6" cy="6" r="6" transform="translate(707 294)" fill={insideColor}/>
            </g>
    </Circle>


);