import React from 'react';
import SidebarTemplate from "../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../components/atoms/Shapes/HorizontalSeparator";
import {CourseIcon, CourseSvgIcon} from "../components/atoms/Icons/CourseIcon";
import LastCourseContainer from "../components/organisms/Course/LastCourseContainer";

const HeaderPathInfoContainer = styled.div`
      display: flex;
      width: 100%;
      height: 9rem;
      flex-direction: column;
      justify-content: flex-end;
      color: ${({theme}) => theme.app_yellow};
      font-size: ${({theme}) => theme.fontSize.xxl};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
`;

const StyledSeparator = styled(HorizontalSeparator)`
      width: 80%;
      margin-top: 1.5rem;
`;

const StatsWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 75%;
      height: 100%;
      padding-top: 3rem;
      //background-color: springgreen;
`;

const LastCoursesWrapper = styled.div`
      display: flex;
      width: 100%;
      height: 12rem;
      //background-color: springgreen;
`;


const Dashboard = () => {

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Dashboard
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <StatsWrapper>
                <LastCoursesWrapper>
                    <LastCourseContainer/>
                    <LastCourseContainer/>
                    <LastCourseContainer/>
                </LastCoursesWrapper>
            </StatsWrapper>
        </SidebarTemplate>
    );
};

export default Dashboard;
