import React from "react";
import styled, {css} from "styled-components";

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
      box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.04), 0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.03);
      cursor: pointer;
      
    ${({groupId, selectedGroupId}) =>
    groupId === selectedGroupId &&
    css`
      background-color: ${({theme}) => theme.colors.yellow};
    `}
    
    ${({showOnly}) =>
    showOnly === true &&
    css`
      cursor: default;
      margin: 2rem 0;     
    `}
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
      color: ${({theme}) => theme.colors.blue_light};

`;

const PeopleQuantityContainer = styled.div`
      display: flex;
      justify-content: flex-end;
      width: 30%;
`;


export const GroupContainer = ({group, selectedGroupId,setCourseData, showOnly = false}) => (
    <GroupWrapper showOnly={showOnly} groupId={group.id} selectedGroupId={selectedGroupId} onClick={() => !showOnly && setCourseData('groupId', group.id)}>
        <DateContainer>{group.academicYear}</DateContainer>
        <DateContainer>{group.faculty}</DateContainer>
        <GroupNameContainer>{group.field}</GroupNameContainer>
        <PeopleQuantityContainer> ilość studentów: {group.studentQuantity}</PeopleQuantityContainer>
    </GroupWrapper>
);
