import React, {useEffect} from "react";
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
      text-decoration: none;

      span{
         color: ${({theme}) => theme.app_blue_light_text};
      }
`;

const NewsSideContainer = () => {
    const news = useSelector(state => state.news || []);
    let latestNews = news[0];

    const getLatestNews = () => {
        if (news.length) {
            news.forEach(news => {
                if (new Date(news.createdAt) > new Date(latestNews.createdAt)) latestNews = news;
            })
        }
    };

    useEffect(() => {
        getLatestNews();
        console.log('getLatest!')
    }, [news]);

    // createdAt: "2020-05-05T11:52:53Z"
    // deletedAt: null
    // description: "Nowość treść"
    // id: 5
    // lecturerFirstName: "Profesor"
    // lecturerLastName: "Doktor"
    // title: "Nowość"
    // updatedAt: "2020-05-05T11:52:5

    return (
        <NewsSideWrapper>
            Najnowsze aktualności
            <NewsContent>
                <InfoIcon/>
                <StyledHeading>{latestNews.title}</StyledHeading>
                <StyledParagraph>{latestNews.description}</StyledParagraph>
                <NewsActionContainer as={Link} to={routes.ROLE_STUDENT.NEWS}>
                    <span>Dodano: {new Date(latestNews.createdAt).toLocaleDateString()}</span>
                    Czytaj dalej {'>'}
                </NewsActionContainer>
            </NewsContent>
        </NewsSideWrapper>
    )
};

export default NewsSideContainer;
