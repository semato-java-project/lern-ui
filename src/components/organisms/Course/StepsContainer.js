import {AddCourseImage} from "../../molecules/Images/AddCourseImage";
import Heading from "../../atoms/Headings/Heading";
import React from "react";
import styled from "styled-components";
import {StepContainer} from "../../molecules/Containers/StepContainer";
import arrow_icon from "../../../assets/arrow_icon.svg";

const AddCourseImageWrapper = styled.div`
      display: flex;
      width:22rem;
      height: auto;
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

const StepsContainer = () => {

    return (
        <>
            <AddCourseImageWrapper>
                {AddCourseImage()}
            </AddCourseImageWrapper>
            <AddCourseStepsSection>
                <Heading>Tworzenie nowego kursu</Heading>
                <StepsHorizontalWrapper>
                    <StepContainer stepNo={1} stepName={'Nazwa i opis'} insideColor='#3c4bad'
                                   outsideColor='url(#linear-gradient)'/>
                    <CourseArrowIcon/>
                    <StepContainer stepNo={2} stepName={'Rodzaj zajęć'}/>
                    <CourseArrowIcon/>
                    <StepContainer stepNo={3} stepName={'Studenci'}/>
                </StepsHorizontalWrapper>
            </AddCourseStepsSection>
        </>
    )
};

export default StepsContainer;
