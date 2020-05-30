import React from "react";
import styled from "styled-components";
import {RowWrapper} from "../Wrappers/RowWrapper";
import publications from "../../../assets/icons/menu/publications-icon-active.svg";

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
      
      @keyframes show {
          0%   {opacity: 0;}
          100% {opacity: 100%;}
         }
      animation: show 0.3s ease-in-out; 
`;

const TitleContainer = styled.div`
      display: flex;
      width: 100%;
      padding-left: 1rem;
      font-size: ${({theme}) => theme.fontSize.xl};
      font-weight: ${({theme}) => theme.fontWeight.bold};
      color: ${({theme}) => theme.colors.blue_light};
      
      span{
            color: ${({theme}) => theme.colors.blue_dark};
                  font-weight: ${({theme}) => theme.fontWeight.medium};
                  margin-left: 0.8rem;

      }
`;

const ContentContainer = styled.div`
      display: flex;
      width: 100%;
      padding-left: 5rem;
      font-size: ${({theme}) => theme.fontSize.s};
      color: ${({theme}) => theme.colors.blue_dark};
      margin-bottom: 3rem;
      margin-top: 1rem;
      text-align: justify;
`;

const Image = styled.div`
      height: 4rem;
      width: 4rem;
      background-image: url(${publications});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
`;


const Publications = ({publication}) => (
    <PublicationWrapper>
        <RowWrapper>
            <Image/>
            <TitleContainer>{publication.lecturerFirstName} {publication.lecturerLastName} - <span>{publication.title}</span></TitleContainer>
        </RowWrapper>
        <ContentContainer>{publication.description}</ContentContainer>
        <RowWrapper justifyContent={'space-between'}>
            <span>{new Date(publication.createdAt).toLocaleDateString()}</span>
            <span>{publication.lecturerId}</span>
        </RowWrapper>
    </PublicationWrapper>
);

export default Publications;
