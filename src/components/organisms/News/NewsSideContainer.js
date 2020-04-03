import React from "react";
import styled from "styled-components";
import Heading from "../../atoms/Headings/Heading";
import Paragraph from "../../atoms/Paragraphs/Paragraph";
import {InfoIcon} from "../../atoms/Icons/InfoIcon";

const NewsSideWrapper = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 4rem;
      z-index: 2;
      padding: 0 3rem;
`;

const NewsContent = styled.div`
      height: 33rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      border-radius: 1.5rem;
      background-color: ${({theme}) => theme.app_blue_dark};
      align-items: center;
      padding: 10%;
`;

const StyledHeading = styled(Heading)`
      margin-top: 1rem;
      color: ${({theme}) => theme.app_background};
`;

const StyledParagraph = styled(Paragraph)`
      color: ${({theme}) => theme.app_background};
      text-align: center;
      align-items: center;
      display: flex;
      height: 50%;
`;

const NewsActionContainer = styled(Paragraph)`
      text-align: center;
      display: flex;
      width: 100%;
      justify-content: space-between;
      color: ${({theme}) => theme.app_background};

      span{
         color: ${({theme}) => theme.app_blue_light_text};
      }
`;

const NewsSideContainer = () => {

    return (
        <NewsSideWrapper>
            Najnowsze aktualności
            <NewsContent>
                <InfoIcon/>
                <StyledHeading>Informacja systemowa</StyledHeading>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</StyledParagraph>
                <NewsActionContainer><span>Dodano: 28.03.2020</span> Czytaj dalej {'>'}</NewsActionContainer>
            </NewsContent>
        </NewsSideWrapper>
    )
};

export default NewsSideContainer;
