import React from 'react';
import SidebarTemplate from "../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../components/atoms/Shapes/HorizontalSeparator";
import LastCourseContainer, {LastCourseWrapper} from "../components/organisms/Course/LastCourseContainer";
import Heading from "../components/atoms/Headings/Heading";
import {theme} from "../theme/mainTheme";
import {AddCourseImage} from '../components/molecules/Images/AddCourseImage'
import Button from "../components/atoms/Button/Button";
import AddCourseContainer from "../components/organisms/Course/AddCourseContainer";

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
      width: 70%;
      height: 100%;
      padding-top: 3rem;
`;

const LastCoursesSection = styled.section`
      display: flex;
      width: 100%;
      height: 12rem;
      ${LastCourseWrapper}:last-child{
           margin-right: 0;
      }
`;


const Dashboard = () => {

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Dashboard
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <StatsWrapper>
                <LastCoursesSection>
                    <LastCourseContainer/>
                    <LastCourseContainer/>
                    <LastCourseContainer/>
                </LastCoursesSection>
                <AddCourseContainer/>
            </StatsWrapper>
        </SidebarTemplate>
    );
};

export default Dashboard;
