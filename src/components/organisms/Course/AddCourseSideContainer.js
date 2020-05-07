import React from "react";
import styled from "styled-components";
import Heading from "../../atoms/Headings/Heading";
import Button from "../../atoms/Button/Button";
import {theme} from "../../../theme/mainTheme";
import {AddCourseImage} from "../../molecules/Images/AddCourseImage";
import {Link} from "react-router-dom";
import {routes} from "../../../routes";
import {useSelector} from "react-redux";
import {USER_ROLES} from "../../../utils/userRoles";

const AddCourseSideWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
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
      margin-top: 5rem;
      height: auto;
      
      @media only screen and (min-width: 1441px) {
         margin-top: 0;
      }
`;
const AddPublicationTitle = styled.div`
      display:flex;
      flex-direction: column;
      position:absolute;
      top: 8rem;
      font-size: 1.8rem;
      left: 10%;
      color: ${({theme}) => theme.app_blue_light};
      
      span{
        font-weight: ${({theme}) => theme.fontWeight.bold};
      }
      
      @media only screen and (min-width: 1441px) {
         top: 11rem;
         font-size: 2.2rem;
      }
`;

const StyledButton = styled(Button)`
    width: 16rem;
    height: 4rem;
    margin: 2rem 0 0;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    background-color: ${({theme}) => theme.app_blue_light};
`;

const AddCourseSideContainer = () => {

    const role = useSelector(state => state.currentUser.role);

    return (
        <AddCourseSideWrapper>
            {role === USER_ROLES.ROLE_LECTURER.API_NAME ?
                <>
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
                        W celu dodania nowego kursu, należy nadać mu nazwę, a także uzupełnić liczbę zajęć
                        laboratoryjnych,
                        projektowych, ćwiczeniowych oraz informacje na temat projektu. Pamiętaj, aby do stworzonego
                        kursu
                        dołączyć materiały wykładowe!
                    </AddPublicationTextWrapper>
                    <StyledButton as={Link} to={routes.ROLE_LECTURER.ADD_COURSE}>Dodaj kurs {'>'}</StyledButton>
                </> : null
            }
        </AddCourseSideWrapper>
    )
};

export default AddCourseSideContainer;
