import React from "react";
import styled from "styled-components";
import {HomeYellowShape} from "../../atoms/Shapes/HomeYellowShape";
import {HomeIcons} from "../../atoms/Shapes/HomeIcons";
import {SoftLightShapeCenter} from "../../atoms/Shapes/SoftLightShapeCenter";
import laptop from "../../../assets/learn_laptop.png";

const Laptop = styled.div`
      display: flex;
      position: absolute;
      width: 55rem;
      height: 45rem;
      left: calc(50% - 27.5rem);
      top: 23%;
      background-image: url(${laptop});
      background-size: contain;
      background-repeat: no-repeat;
`;

const MainHomeImage = () => (
    <>
        <HomeYellowShape/>
        <HomeIcons/>
        <Laptop/>
        <SoftLightShapeCenter/>
    </>
);

export default MainHomeImage;