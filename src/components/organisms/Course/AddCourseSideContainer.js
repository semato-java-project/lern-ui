import React from "react";
import styled from "styled-components";
import Heading from "../../atoms/Headings/Heading";
import Button from "../../atoms/Button/Button";
import {theme} from "../../../theme/mainTheme";
import {AddCourseImage} from "../../molecules/Images/AddCourseImage";

const AddCourseSideWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 30%;
      position:relative;
      align-items: center;
`;

const AddCourseSideImageWrapper = styled.div`
      display: flex;
      width: 60%;
`;

const AddPublicationTextWrapper = styled.div`
      display: flex;
      width: 73%;
      align-content: center;
`;
const AddPublicationTitle = styled(Heading)`
      display:flex;
      flex-direction: column;
      position:absolute;
      top: 11rem;
      font-size: 2.2rem;
      color: ${({theme}) => theme.app_blue_light};
      span{
        font-weight: ${({theme}) => theme.fontWeight.bold};
      }
`;

const StyledButton = styled(Button)`
    width: 16rem;
    min-height: 1rem;
    height: 4rem;
    margin: 2rem 0 0;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    background-color: ${({theme}) => theme.app_blue_light};
`;

const AddCourseSideContainer = () => {

    return (
        <AddCourseSideWrapper>
            <AddCourseSideImageWrapper>
                {AddCourseImage()}
            </AddCourseSideImageWrapper>
            <AddPublicationTitle>
                <Heading fontSize={'2rem'}>Gotowy na nowe wyzwania?
                </Heading>
                <Heading fontWeight={theme.fontWeight.black} color={theme.app_blue_light}>Dodaj kurs już
                    teraz!</Heading>
            </AddPublicationTitle>
            <AddPublicationTextWrapper>
                W celu dodania nowego kursu, należy nadać mu nazwę, a także uzupełnić liczbę zajęć laboratoryjnych,
                projektowych, ćwiczeniowych oraz informacje na temat projektu. Pamiętaj, aby do stworzonego kursu
                dołączyć materiały wykładowe!
            </AddPublicationTextWrapper>
            <StyledButton>Dodaj kurs {'>'}</StyledButton>
        </AddCourseSideWrapper>
    )
};

export default AddCourseSideContainer;
