import React from 'react';
import GlobalStyle from "../theme/GlobalStyle"
import styled, {ThemeProvider} from 'styled-components'
import {theme} from "../theme/mainTheme";


const AppWrapper = styled.div`
   display: flex;
   width: 100vw;
   min-height: 100vh;
   position: relative;
   flex-direction: column;
   overflow-x: hidden;
`;

const MainTemplate = ({children}) => (
    <AppWrapper>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
                {children}
        </ThemeProvider>
    </AppWrapper>

);
export default MainTemplate;
