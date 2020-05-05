import React from "react";
import styled from "styled-components";
import {RowWrapper} from "../Wrappers/RowWrapper";
import publications from "../../../assets/MenuIcons/publications-icon-active.svg";

const PublicationWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 10rem;
      padding: 3rem;
      margin: 0.8rem 0;
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      background-color: white;
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
      font-size: ${({theme}) => theme.fontSize.l};
      color: ${({theme}) => theme.app_blue_dark};
      padding: 0 0 3rem 5rem;
`;

const Image = styled.div`
      height: 4rem;
      width: 4rem;
      background-image: url(${publications});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
`;


const Publications = ({publication})=> (
    <PublicationWrapper>
        <RowWrapper>
            <Image/>
            <TitleContainer>{publication.title}</TitleContainer>
        </RowWrapper>
            <ContentContainer>{publication.description}</ContentContainer>
            <RowWrapper justifyContent={'space-between'}>
                <span>{new Date(publication.createdAt).toLocaleDateString()}</span>
                <span>{publication.lecturerId}</span>
            </RowWrapper>
    </PublicationWrapper>
);

export default Publications;
