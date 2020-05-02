import React from "react";
import styled from "styled-components";
import {RowWrapper} from "../Wrappers/RowWrapper";
import {InfoIcon} from "../../atoms/Icons/InfoIcon";

const NewsWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 6rem;
      padding: 3rem;
      margin: 0.8rem 0;
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      background-color: white;
      border: none;
      border-radius: 1rem;
      width: 100%;
      box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.04), 0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.03);
`;

const TitleContainer = styled.div`
      display: flex;
      width: 100%;
      padding-left: 1rem;
      font-size: ${({theme}) => theme.fontSize.xl};
      font-weight: ${({theme}) => theme.fontWeight.bold};
      color: ${({theme}) => theme.app_blue_light};
`;

const ContentContainer = styled.div`
      display: flex;
      width: 100%;
      padding-left: 1rem;
      font-size: ${({theme}) => theme.fontSize.l};
      color: ${({theme}) => theme.app_blue_dark};
      margin: 0 0 3rem 8rem;
`;


const NewsContainer = ({news})=> (
    <NewsWrapper>
        <RowWrapper>
            <InfoIcon/>
            <TitleContainer>{news.title}</TitleContainer>
        </RowWrapper>
            <ContentContainer>{news.description}</ContentContainer>
            <RowWrapper justifyContent={'space-between'}>
                <span>{new Date(news.createdAt).toLocaleDateString()}</span>
                <span>{news.lecturerId}</span>
            </RowWrapper>
    </NewsWrapper>
);

export default NewsContainer;
