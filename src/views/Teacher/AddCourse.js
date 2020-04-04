import React from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import {AddCourseImage} from "../../components/molecules/Images/AddCourseImage";
import Heading from "../../components/atoms/Headings/Heading";
import arrow_icon from "../../assets/arrow_icon.svg";
import {StepContainer} from "../../components/molecules/Containers/StepContainer";

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

export const ContentWrapper = styled.div`
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


const StepsSection = styled.section`
      display: flex;
      width: 100%;
      flex-wrap: wrap;
`;
const AddCourseImageWrapper = styled.div`
      display: flex;
      width:22rem;
      height: auto;
      //position: absolute;
      //top: -1.5rem;
      z-index: -1;
`;


const AddCourseStepsSection = styled.section`
    display: flex;
    min-width: 40%;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
`;



const CourseArrowIcon = styled.div`
      height: 2.5rem;
      width: 2rem;
      display: flex;
      background-image: url(${arrow_icon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin: 0 2.5rem;
`;

const StepsHorizontalWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const AddCourse = () => {

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Dodaj kurs
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                <MainContentSection>
                    <StepsSection>
                        <AddCourseImageWrapper>
                            {AddCourseImage()}
                        </AddCourseImageWrapper>
                        <AddCourseStepsSection>
                            <Heading>Tworzenie nowego kursu</Heading>
                            <StepsHorizontalWrapper>
                                <StepContainer stepNo={1} stepName={'Nazwa i opis'} insideColor='#3c4bad' outsideColor='url(#linear-gradient)'/>
                                <CourseArrowIcon/>
                                <StepContainer stepNo={2} stepName={'Rodzaj zajęć'} insideColor='#B2B2B2' outsideColor='#D1D2D5'/>
                                <CourseArrowIcon/>
                                <StepContainer stepNo={3} stepName={'Studenci'} insideColor='#B2B2B2' outsideColor='#D1D2D5'/>
                            </StepsHorizontalWrapper>
                        </AddCourseStepsSection>
                    </StepsSection>
                </MainContentSection>
                <SideContentSection>
                    sdfsd
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default AddCourse;