import React from "react";
import styled from "styled-components";

const MenuShape = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 15%;
   position: fixed;
   align-items: center;
   background-color: ${({theme}) => theme.app_blue_dark};
   border-right: 10px solid ${({theme}) => theme.app_yellow};;
`;


const Menu = () => {

    return (
        <MenuShape>
        </MenuShape>
    )
};

export default Menu;
