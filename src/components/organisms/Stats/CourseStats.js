import React from "react";
import styled from "styled-components";
import {LastCourseWrapper} from "../Course/LastCourseContainer";

const StatsTitle = styled.div`
      display: flex;
      width: 100%;
      height: 3rem;
`;

const StatsContent = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: ${({theme}) => theme.app_background};
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
`;

export const StatsWrapper = styled.div`
      display: flex;
      margin-right: 2rem;
      width: 50%;
      height: 100%;
      ${LastCourseWrapper}:last-child{
           margin-right: 0;
      }
      flex-direction: column;
`;

const CourseStats = () => {

    return (
        <StatsWrapper>
            <StatsTitle>Statystyki uczniów</StatsTitle>
            <StatsContent></StatsContent>
        </StatsWrapper>
    )
};

export default CourseStats;
