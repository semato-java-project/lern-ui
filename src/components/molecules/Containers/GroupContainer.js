import React from "react";
import styled from "styled-components";

const GroupWrapper = styled.div`
      display: flex;
      align-items: center;
      height: 6rem;
      padding: 3rem;
      margin: 0.8rem 0;
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      background-color: white;
      border: none;
      border-radius: 1rem;
      width: 100%;
      box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.06), 0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.05);
      cursor: pointer;
`;

const DateContainer = styled.div`
      display: flex;
      width: 12%;
`;

const GroupNameContainer = styled.div`
      display: flex;
      width: 58%;
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.bold};
      color: ${({theme}) => theme.app_blue_light};

`;

const PeopleQuantityContainer = styled.div`
      display: flex;
      justify-content: flex-end;
      width: 30%;
`;



export const GroupContainer = () => (
    <GroupWrapper>
        <DateContainer>2016/2017</DateContainer>
        <GroupNameContainer>Nazwa grupy</GroupNameContainer>
        <PeopleQuantityContainer> ilość studentów: 32</PeopleQuantityContainer>

    </GroupWrapper>
);
