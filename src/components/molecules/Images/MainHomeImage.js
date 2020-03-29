import React from "react";
import {HomeYellowShape} from "../../atoms/Shapes/HomeYellowShape";
import {HomeIcons} from "../../atoms/Shapes/HomeIcons";
import {SoftLightShapeCenter} from "../../atoms/Shapes/SoftLightShapeCenter";


const MainHomeImage = ({children}) => (
    <>
        <HomeYellowShape/>
        <HomeIcons/>
        {children}
        <SoftLightShapeCenter/>
    </>
);

export default MainHomeImage;