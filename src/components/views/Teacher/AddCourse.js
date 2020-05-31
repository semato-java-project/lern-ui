import React, {useState} from 'react';
import SidebarTemplate from "../../appUIConfig/templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../atoms/Shapes/HorizontalSeparator";
import StepsContainer from "../../organisms/Course/StepsContainer";
import Heading from "../../atoms/Headings/Heading";
import Button from "../../atoms/Buttons/Button";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPES} from "../../../store/reducers/actionTypes";
import AddPublicationContainer from "../../organisms/Publication/AddPublicationContainer";
import NewsSideContainer from "../../organisms/News/NewsSideContainer";
import {CheckIcon} from "../../atoms/Icons/CheckIcon";
import {WarnIcon} from "../../atoms/Icons/WarnIcon";
import {routes} from "../../../utils/routes";
import {Link} from "react-router-dom";
import AddCourseNameForm from "../../organisms/Course/AddCourseNameForm";
import AddCourseDetailsForm from "../../organisms/Course/AddCourseDetailsForm";
import AddCourseGroupForm from "../../organisms/Course/AddCourseGroupForm";

export const AddCourseContext = React.createContext(null);


const HeaderPathInfoContainer = styled.div`
      display: flex;
      width: 100%;
      height: 9rem;
      flex-direction: column;
      justify-content: flex-end;
      color: ${({theme}) => theme.colors.yellow};
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
      color: ${({theme}) => theme.colors.blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
`;

const MainContentSection = styled.div`
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 100%;
      
      @keyframes show-section {
          0%   {opacity: 0;}
          100% {opacity: 100%;}
         }
      animation: show-section 0.3s ease-in-out; 
`;

const StatusInfoContainer = styled.div`
      display: flex;
      flex-direction: column;
      padding-top: 20rem;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
`;

const SideContentSection = styled.div`
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;
      color: ${({theme}) => theme.colors.blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
      padding: 2rem 3rem 0;
`;

const StepsSection = styled.section`
      display: flex;
      width: 100%;
      flex-wrap: wrap;
`;

const AddCourseFormSection = styled.section`
      display: flex;
      width: 100%;
      margin-top: 4rem;
`;

export const AddCourseButton = styled(Button)`
     width: 16rem;
     height: 4rem;
     margin: 2rem 0 0;
     font-weight: ${({theme}) => theme.fontWeight.regular};
`;

export const ErrorParagraph = styled.p`
      font-weight: ${({theme}) => theme.fontWeight.regular};
      font-size: ${({theme}) => theme.fontSize.s};
      color: ${({theme}) => theme.colors.error_red};
`;


export const ADD_PROCESS_STEPS = {
    SET_NAME_WITH_DESCRIPTION: 'SET_NAME_WITH_DESCRIPTION',
    SET_DETAILS: 'SET_DETAILS',
    SET_GROUP: 'SET_GROUP',
};


const AddCourse = () => {

    // --- INITIALIZATION ---
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(ADD_PROCESS_STEPS.SET_NAME_WITH_DESCRIPTION);
    const [addResponse, setAddResponse] = useState({status: undefined, message: ''});
    const [validationError, setValidationError] = useState(false);
    const [groupValidationError, setGroupValidationError] = useState(false);
    const courseToAdd = useSelector(state => state.courseToAdd || {});

    // --- REUSABLE FUNCTION TO SET COURSE DATA ---
    const setCourseData = (type, data) => dispatch({
        type: ACTION_TYPES.SET_COURSE_TO_ADD,
        payload: {...courseToAdd, [type]: data}
    });

    // --- CONTEXT PREPARED ---
    const addCourseContext = {
        activeStep,
        setActiveStep,
        addResponse,
        setAddResponse,
        validationError,
        setValidationError,
        groupValidationError,
        setGroupValidationError,
        setCourseData,
        courseToAdd,
    };

    // --- RETURNS FORM BY CURRENT STEP ---
    const generateFormByActiveStep = (step) => {
        switch (step) {
            case ADD_PROCESS_STEPS.SET_NAME_WITH_DESCRIPTION :
                return <AddCourseNameForm/>;

            case ADD_PROCESS_STEPS.SET_DETAILS :
                return <AddCourseDetailsForm/>;

            case ADD_PROCESS_STEPS.SET_GROUP :
                return <AddCourseGroupForm/>;
            default:
                return null
        }
    };

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Dodaj kurs
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                {addResponse.status ?
                    <MainContentSection>
                        <StatusInfoContainer>
                            {addResponse.status === 'success' ?
                                <>
                                    {CheckIcon()}
                                    <Heading marginTop={'3rem'} margin-left={'4rem'}>{addResponse.message}</Heading>
                                    <Button as={Link} to={routes.ROLE_LECTURER.COURSES}>Pokaż listę
                                        kursów{'>'}</Button>
                                </>
                                :
                                <>
                                    {WarnIcon()}
                                    <Heading marginTop={'3rem'} margin-left={'4rem'}>{addResponse.message}</Heading>
                                    <Button onClick={() => {
                                        setActiveStep(ADD_PROCESS_STEPS.SET_NAME_WITH_DESCRIPTION);
                                        setAddResponse({status: undefined, message: ''});
                                    }}>Spróbuj ponownie{'>'}</Button>
                                </>
                            }
                        </StatusInfoContainer>
                    </MainContentSection>
                    :
                    <MainContentSection>
                        <StepsSection>
                            <StepsContainer activeStep={activeStep}/>
                        </StepsSection>
                        <AddCourseFormSection>
                            <AddCourseContext.Provider value={addCourseContext}>
                                {generateFormByActiveStep(activeStep)}
                            </AddCourseContext.Provider>
                        </AddCourseFormSection>
                    </MainContentSection>
                }
                <SideContentSection>
                    <AddPublicationContainer/>
                    <NewsSideContainer/>
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default AddCourse;