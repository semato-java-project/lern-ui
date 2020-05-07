import {AddCourseImage} from "../../molecules/Images/AddCourseImage";
import Heading from "../../atoms/Headings/Heading";
import {theme} from "../../../theme/mainTheme";
import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import {Link} from "react-router-dom";
import {routes} from "../../../routes";

const AddCourseSection = styled.section`
      display: flex;
      width: 100%;
      height: 12rem;
      margin-top: 7vh;
      position: relative;
`;

const AddCourseImageWrapper = styled.div`
      display: flex;
      width:22rem;
      height: auto;
      position: absolute;
      top: -1.5rem;
      z-index: -1;
`;

const AddCourseContent = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      margin-left: 16rem;
`;

const AddCourseTitleWrapper = styled.div`
      display: flex;
      width: 100%;
      height: 60%;
      flex-direction: column;
      position: relative;
      justify-content: center;
`;
const AddCourseInfoWrapper = styled.div`
      display: flex;
      width: 100%;
      height: 40%;
      font-size: ${({theme}) => theme.fontSize.s};
      color: ${({theme}) => theme.app_blue_dark};
      text-align: justify;
`;

const StyledButton = styled(Button)`
    margin: 0;
    position: absolute;
    right: 0;
    width: 16rem;
    height: 4rem;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    background-color: ${({theme}) => theme.app_blue_light};
`;

const AddCourseContainer = () => {

    return (
        <AddCourseSection>
            <AddCourseImageWrapper>
                {AddCourseImage()}
            </AddCourseImageWrapper>
            <AddCourseContent>
                <AddCourseTitleWrapper>
                    <StyledButton as={Link} to={routes.ROLE_LECTURER.ADD_COURSE}>Dodaj kurs {'>'}</StyledButton>
                    <Heading fontSize={'2rem'}>Gotowy na nowe wyzwania?
                    </Heading>
                    <Heading fontWeight={theme.fontWeight.black} color={theme.app_blue_light}>Dodaj kurs już
                        teraz!</Heading>
                </AddCourseTitleWrapper>
                <AddCourseInfoWrapper>
                    W celu dodania nowego kursu, należy nadać mu nazwę, a także uzupełnić liczbę zajęć
                    laboratoryjnych, projektowych, ćwiczeniowych oraz informacje na temat projektu. Pamiętaj,
                    aby do stworzonego kursu dołączyć materiały wykładowe!
                </AddCourseInfoWrapper>
            </AddCourseContent>
        </AddCourseSection>
    )
};

export default AddCourseContainer;
