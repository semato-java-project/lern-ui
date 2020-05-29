import React from "react";
import styled from "styled-components";
import Heading from "../../atoms/Headings/Heading";
import Paragraph from "../../atoms/Paragraphs/Paragraph";
import {InfoIcon} from "../../atoms/Icons/InfoIcon";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {routes} from "../../../routes";

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
      background-color: ${({theme}) => theme.colors.blue_dark};
      align-items: center;
      padding: 10%;
`;

const StyledHeading = styled(Heading)`
      margin-top: 1rem;
      color: ${({theme}) => theme.colors.background_white};
`;

const StyledParagraph = styled(Paragraph)`
      color: ${({theme}) => theme.colors.background_white};
      display: flex;
      height: 50%;
      width: 100%;
      overflow: hidden;
      text-align: justify;
      margin: 1rem 0;
`;

const NewsActionContainer = styled(Paragraph)`
      text-align: center;
      display: flex;
      width: 100%;
      justify-content: space-between;
      color: ${({theme}) => theme.colors.background_white};
      text-decoration: none;

      span{
         color: ${({theme}) => theme.colors.blue_light_text};
      }
`;

const NewsSideContainer = () => {
    const news = useSelector(state => state.news || [{title: '', description:''}]);
    let latestNews = news[0];

    return (
        <NewsSideWrapper>
            Najnowsze aktualności
            <NewsContent>
                <InfoIcon/>
                <StyledHeading>{latestNews.title}</StyledHeading>
                <StyledParagraph>{latestNews.description}</StyledParagraph>
                <NewsActionContainer as={Link} to={routes.ROLE_STUDENT.NEWS}>
                    <span>Dodano: {new Date(latestNews.createdAt).toLocaleDateString()}</span>
                    Więcej {'>'}
                </NewsActionContainer>
            </NewsContent>
        </NewsSideWrapper>
    )
};

export default NewsSideContainer;
