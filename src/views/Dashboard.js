import React from 'react';
import SidebarTemplate from "../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../components/atoms/Shapes/HorizontalSeparator";
import LastCourseContainer, {LastCourseWrapper} from "../components/organisms/Course/LastCourseContainer";
import AddCourseContainer from "../components/organisms/Course/AddCourseContainer";
import CourseStats, {StatsWrapper} from "../components/organisms/Stats/CourseStats";
import {AddPublicationImage} from "../components/molecules/Images/AddPublicationImage";
import Heading from "../components/atoms/Headings/Heading";
import Button from "../components/atoms/Button/Button";

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

const AddPublicationContainer = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 30%;
      position:relative;
      align-items: center;
`;

const AddPublicationImageWrapper = styled.div`
      display: flex;
      width: 60%;
      margin-left: -12rem;
`;

const AddPublicationTextWrapper = styled.div`
      display: flex;
      width: 70%;
      align-content: center;
      text-align: center;
`;
const AddPublicationTitle = styled(Heading)`
      display:flex;
      flex-direction: column;
      position:absolute;
      top: 7.5rem;
      left: 40%;
      font-size: 2.2rem;
      color: ${({theme}) => theme.app_blue_light};
      span{
        font-weight: ${({theme}) => theme.fontWeight.bold};
      }
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

const StyledButton = styled(Button)`
    margin: 3rem;
    width: 18rem;
    min-height: 1rem;
    height: 4rem;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    background-color: ${({theme}) => theme.app_yellow};
    color: ${({theme}) => theme.app_blue_dark};
    
    &:hover{
      background-color: ${({theme}) => theme.app_blue_dark};
      }
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
                    <AddPublicationContainer>
                        <AddPublicationImageWrapper>
                            <AddPublicationImage/>
                        </AddPublicationImageWrapper>
                        <AddPublicationTitle>
                            Nie zapomnij<span>dodać publikacji!</span>
                        </AddPublicationTitle>
                        <AddPublicationTextWrapper>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </AddPublicationTextWrapper>
                        <StyledButton>Dodaj publikację{'>'}</StyledButton>
                    </AddPublicationContainer>
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default Dashboard;
