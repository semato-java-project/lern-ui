import React from 'react';
import styled from 'styled-components';
import Menu from "../components/organisms/Menu/Menu";
import Logo from "../components/atoms/Logo/Logo";
import {UserPathShape} from "../components/atoms/Shapes/UserPathSHape";
import {RightBottomSoftShape} from "../components/atoms/Shapes/RightBottomSoftShape";
import CurrentUser from "../components/organisms/CurrentUser/CurrentUser";

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
    background-color: ${({theme}) => theme.app_background};
    margin: 0 auto 0 15%;
    padding: 5rem;
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

