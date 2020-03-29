import React from 'react';
import styled from 'styled-components'
import MainTemplate from "../templates/MainTemplate";
import Logo from "../components/atoms/Logo/Logo";
import Heading from "../components/atoms/Headings/Heading";
import Paragraph from "../components/atoms/Paragraphs/Paragraph";
import Button from "../components/atoms/Button/Button";
import {HomeBackgroundShape} from "../components/atoms/Shapes/HomeBackgroundShape";
import MainHomeImage from "../components/molecules/Images/MainHomeImage";

const ContentWrapper = styled.div`
      display: flex;
      margin-top: 10rem;
      width: 100%;
      height: 10vh;
      align-items: center;
      flex-direction: column;
`;

const InfoSection = styled.section`
      display: flex;
      width: 40%;
      text-align: center;
`;

function HomePage() {
    return (
        <MainTemplate>
            <HomeBackgroundShape/>
            <Logo/>
            <MainHomeImage/>
            <ContentWrapper>
                <Heading big>
                    System Zarządzania Kursami Studenckimi
                </Heading>
                <InfoSection>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </Paragraph>
                </InfoSection>
                <Button>Przejdź do systemu {'>'}</Button>
            </ContentWrapper>
        </MainTemplate>
    );
}

export default HomePage;
