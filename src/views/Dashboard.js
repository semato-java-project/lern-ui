import React from 'react';
import SidebarTemplate from "../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../components/atoms/Shapes/HorizontalSeparator";
import LastCourseContainer, {LastCourseWrapper} from "../components/organisms/Course/LastCourseContainer";
import AddCourseContainer from "../components/organisms/Course/AddCourseContainer";
import CourseStats, {StatsWrapper} from "../components/organisms/Stats/CourseStats";
import AddPublicationContainer from "../components/organisms/Publication/AddPublicationContainer";
import NewsSideContainer from "../components/organisms/News/NewsSideContainer";

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

const ContentWrapper = styled.div`
      display: flex;
      width: 100%;
      padding-top: 4rem;
      color: ${({theme}) => theme.app_blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
`;

const MainContentSection = styled.div`
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 100%;
`;

const SideContentSection = styled.div`
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;
      color: ${({theme}) => theme.app_blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
      padding: 2rem 3rem 0;
`;


const LastCoursesSection = styled.section`
      display: flex;
      width: 100%;
      height: 12rem;
      ${LastCourseWrapper}:last-child{
           margin-right: 0;
      }
`;

const StatsSection = styled.div`
      display: flex;
      width: 100%;
      height: 36rem;
      ${StatsWrapper}:last-child{
           margin-right: 0;
      }
      margin-top: 6vh;
`;

const HorizontalTitle = styled.div`
      display: flex;
      width: 100%;
      height: 3rem;
      margin-bottom: 2vh;
`;


const Dashboard = () => {

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Dashboard
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                <MainContentSection>
                    <HorizontalTitle>Ostatnio wyświetlone kursy</HorizontalTitle>
                    <LastCoursesSection>
                        <LastCourseContainer/>
                        <LastCourseContainer/>
                        <LastCourseContainer/>
                    </LastCoursesSection>
                    <AddCourseContainer/>
                    <StatsSection>
                        <CourseStats/>
                        <CourseStats/>
                    </StatsSection>
                </MainContentSection>
                <SideContentSection>
                    <AddPublicationContainer/>
                    <NewsSideContainer/>
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default Dashboard;
