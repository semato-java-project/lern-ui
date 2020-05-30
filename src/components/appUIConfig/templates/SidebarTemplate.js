import React from 'react';
import styled from 'styled-components';
import Menu from "../../organisms/Menu/Menu";
import Logo from "../../atoms/Logotypes/Logo";
import {RightBottomSoftShape} from "../../atoms/Shapes/RightBottomSoftShape";
import CurrentUser from "../../organisms/CurrentUser/CurrentUser";

const AppWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;    
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.background_white};
    margin: 0 auto 0 15%;
    padding: 0 5rem;
    z-index: 0;
`;

const SidebarTemplate = ({children}) => {
    return (
        <AppWrapper>
            <Logo/>
            <Menu/>
            <ContentWrapper>
                <CurrentUser/>
                <RightBottomSoftShape/>
                {children}
            </ContentWrapper>
        </AppWrapper>
    )
};

export default SidebarTemplate;

