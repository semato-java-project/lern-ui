import React, {useEffect, useState} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import StepsContainer from "../../components/organisms/Course/StepsContainer";
import {ColumnWrapper} from "../../components/molecules/Wrappers/ColumnWrapper";
import Heading from "../../components/atoms/Headings/Heading";
import Input from "../../components/atoms/Input/Input";
import TextArea from "../../components/atoms/Textarea/Textarea";
import Button from "../../components/atoms/Button/Button";
import {InputWithButtons} from "../../components/molecules/InputWithButtons/InputWithButtons";
import {RowWrapper} from "../../components/molecules/Wrappers/RowWrapper";
import {INPUT_TYPES} from "../../utils/Types";
import {GroupContainer} from "../../components/molecules/Containers/GroupContainer";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPES} from "../../reducers/actionTypes";
import {createItem, getList} from "../../actions";
import {ADD_COURSE, GET_GROUPS} from "../../api-config/requestTypes";
import AddPublicationContainer from "../../components/organisms/Publication/AddPublicationContainer";
import NewsSideContainer from "../../components/organisms/News/NewsSideContainer";
import {CheckIcon} from "../../components/atoms/Icons/CheckIcon";
import {WarnIcon} from "../../components/atoms/Icons/WarnIcon";
import {routes} from "../../routes";
import {Link} from "react-router-dom";

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
      color: ${({theme}) => theme.app_blue_dark};
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

const StyledButton = styled(Button)`
     width: 16rem;
     height: 4rem;
     margin: 2rem 0 0;
     font-weight: ${({theme}) => theme.fontWeight.regular};
`;

const ErrorParagraph = styled.p`
        font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.s};
  color: #DE242B;
`;


export const ADD_PROCESS_STEPS = {
    SET_NAME_WITH_DESCRIPTION: 'SET_NAME_WITH_DESCRIPTION',
    SET_DETAILS: 'SET_DETAILS',
    SET_GROUP: 'SET_GROUP',
};


const TASK_TYPES = {
    LAB: 'LAB',
    PROJECT: 'PROJECT',
    EXAM: 'EXAM',
    DISCUSSIONS: 'DISCUSSIONS'
};

const AddCourse = () => {

        const dispatch = useDispatch();
        const [activeStep, setActiveStep] = useState(ADD_PROCESS_STEPS.SET_NAME_WITH_DESCRIPTION);
        const [addResponse, setAddResponse] = useState({status: undefined, message: ''});
        const [validationError, setValidationError] = useState(false);
        const [groupValidationError, setGroupValidationError] = useState(false);
        const courseToAdd = useSelector(state => state.courseToAdd || {});
        const groups = useSelector(state => state.groups || []);


        // --- EXAM VALUES ---
        const [examValues, setExamValues] = useState({
            quantity: 0,
            markWeight: 0,
            taskType: TASK_TYPES.EXAM
        });

        // --- EXERCISES VALUES ---
        const [discussionsValues, setDiscussionsValues] = useState({
            quantity: 0,
            markWeight: 0,
            taskType: TASK_TYPES.DISCUSSIONS
        });


        // --- EXERCISES VALUES ---
        const [labValues, setLabValues] = useState({
            quantity: 0,
            markWeight: 0,
            maxGroupQuantity: 0,
            taskType: TASK_TYPES.LAB
        });


        // --- EXERCISES VALUES ---
        const [projectValues, setProjectValues] = useState({
            quantity: 0,
            markWeight: 0,
            maxGroupQuantity: 0,
            taskType: TASK_TYPES.PROJECT
        });

        // --- VALUES HANDLER ---
        const setValue = (property, value, handler, prevValues) => {
            handler({...prevValues, [property]: value})
        };


        const setCourseData = (type, data) => dispatch({
            type: ACTION_TYPES.SET_COURSE_TO_ADD,
            payload: {...courseToAdd, [type]: data}
        });

        useEffect(() => {
            if (activeStep === ADD_PROCESS_STEPS.SET_GROUP) dispatch(getList(GET_GROUPS))
        }, [activeStep,dispatch]);

        const isFirstStepValid = () => {
            if (courseToAdd.name && courseToAdd.name.trim() !== ''
                && courseToAdd.description && courseToAdd.description.trim() !== '') {
                return true;
            } else {
                setValidationError(true);
                return false;
            }
        };

        const isGroupStepValid = () => {
            if (courseToAdd.groupId) {
                return true;
            } else {
                setGroupValidationError(true);
                return false;
            }
        };


        const generateFormByActiveStep = (step) => {
            switch (step) {
                case ADD_PROCESS_STEPS.SET_NAME_WITH_DESCRIPTION :
                    return (
                        <ColumnWrapper>
                            <Heading>Nazwa kursu</Heading>
                            <Input
                                withShadow
                                placeholder={'Wprowadź nazwę kursu...'}
                                marginTop={'1rem'}
                                width={'40rem'}
                                value={courseToAdd.name}
                                onFocus={() => validationError && setValidationError(false)}
                                onChange={(e) => setCourseData('name', e.target.value)}
                            />
                            <Heading marginTop={'4rem'}>Opis kursu</Heading>
                            <TextArea
                                placeholder={'Wprowadź opis kursu...'}
                                width={'100%'}
                                value={courseToAdd.description}
                                onFocus={() => validationError && setValidationError(false)}
                                onChange={(e) => setCourseData('description', e.target.value)}
                            />
                            <RowWrapper justifyContent={'space-between'}>
                                {validationError ?
                                    <ErrorParagraph>Nie wszystkie pola zostały uzupełnione/</ErrorParagraph> : <p></p>}
                                <StyledButton
                                    onClick={() => isFirstStepValid() && setActiveStep(ADD_PROCESS_STEPS.SET_DETAILS)}>
                                    Następny krok {'>'}
                                </StyledButton>
                            </RowWrapper>
                        </ColumnWrapper>
                    );
                case ADD_PROCESS_STEPS.SET_DETAILS :
                    return (
                        <ColumnWrapper>
                            <Heading marginTop={'3rem'}>Egzamin</Heading>
                            <RowWrapper>
                                <InputWithButtons inputType={INPUT_TYPES.NUMBER}
                                                  value={examValues.quantity}
                                                  setValue={(value) =>
                                                      setValue('quantity', value, setExamValues, examValues)}
                                />
                                <InputWithButtons inputType={INPUT_TYPES.WEIGHT}
                                                  value={examValues.markWeight}
                                                  setValue={(value) =>
                                                      setValue('markWeight', value, setExamValues, examValues)}
                                />
                            </RowWrapper>
                            <Heading marginTop={'3rem'}>Ćwiczenia</Heading>
                            <RowWrapper>
                                <InputWithButtons inputType={INPUT_TYPES.NUMBER}
                                                  value={discussionsValues.quantity}
                                                  setValue={(value) =>
                                                      setValue('quantity', value, setDiscussionsValues, discussionsValues)}
                                />
                                <InputWithButtons inputType={INPUT_TYPES.WEIGHT}
                                                  value={discussionsValues.markWeight}
                                                  setValue={(value) =>
                                                      setValue('markWeight', value, setDiscussionsValues, discussionsValues)}
                                />
                            </RowWrapper>
                            <Heading marginTop={'3rem'}>Laboratorium</Heading>
                            <RowWrapper>
                                <InputWithButtons inputType={INPUT_TYPES.NUMBER}
                                                  value={labValues.quantity}
                                                  setValue={(value) =>
                                                      setValue('quantity', value, setLabValues, labValues)}
                                />
                                <InputWithButtons inputType={INPUT_TYPES.WEIGHT}
                                                  value={labValues.markWeight}
                                                  setValue={(value) =>
                                                      setValue('markWeight', value, setLabValues, labValues)}
                                />
                                <InputWithButtons inputType={INPUT_TYPES.PERSON_NUMBER}
                                                  value={labValues.maxGroupQuantity}
                                                  setValue={(value) =>
                                                      setValue('maxGroupQuantity', value, setLabValues, labValues)}
                                                  width={'13rem'}
                                                  paddingLeft={'10rem'}
                                />
                            </RowWrapper>
                            <Heading marginTop={'3rem'}>Projekt</Heading>
                            <RowWrapper>
                                <InputWithButtons inputType={INPUT_TYPES.NUMBER}
                                                  value={projectValues.quantity}
                                                  setValue={(value) =>
                                                      setValue('quantity', value, setProjectValues, projectValues)}
                                />
                                <InputWithButtons inputType={INPUT_TYPES.WEIGHT}
                                                  value={projectValues.markWeight}
                                                  setValue={(value) =>
                                                      setValue('markWeight', value, setProjectValues, projectValues)}
                                />
                                <InputWithButtons inputType={INPUT_TYPES.PERSON_NUMBER}
                                                  value={projectValues.maxGroupQuantity}
                                                  setValue={(value) =>
                                                      setValue('maxGroupQuantity', value, setProjectValues, projectValues)}
                                                  width={'13rem'}
                                                  paddingLeft={'10rem'}
                                />
                            </RowWrapper>
                            <RowWrapper justifyContent={'space-between'}>
                                <StyledButton grayColor
                                              onClick={() => setActiveStep(ADD_PROCESS_STEPS.SET_NAME_WITH_DESCRIPTION)}>{'<'} Wstecz</StyledButton>
                                <StyledButton onClick={() => {
                                    setCourseData('taskList', [examValues, discussionsValues, labValues, projectValues]);
                                    setActiveStep(ADD_PROCESS_STEPS.SET_GROUP)
                                }}>Następny
                                    krok {'>'}</StyledButton>
                            </RowWrapper>
                        </ColumnWrapper>
                    );
                case ADD_PROCESS_STEPS.SET_GROUP :
                    return (
                        <ColumnWrapper spaceBetween>
                            <Heading>Studenci</Heading>
                            {groups.map(group => <GroupContainer key={group.id} group={group}
                                                                 selectedGroupId={courseToAdd.groupId || null}
                                                                 setCourseData={setCourseData}/>)}
                            <RowWrapper justifyContent={'space-between'}>
                                <StyledButton grayColor
                                              onClick={() => setActiveStep(ADD_PROCESS_STEPS.SET_DETAILS)}>{'<'} Wstecz</StyledButton>
                                {groupValidationError ? <ErrorParagraph>Nie wybrano grupy.</ErrorParagraph> : null}
                                <StyledButton onClick={() => {
                                    isGroupStepValid() && dispatch(createItem(ADD_COURSE, courseToAdd))
                                        .then(() => setAddResponse({
                                            status: 'success',
                                            message: 'Tworzenie kursu zakończone sukcesem.'
                                        }))
                                        .then(() => dispatch({
                                            type: ACTION_TYPES.DATA_CLEANUP,
                                            payload: 'courseToAdd'
                                        }))
                                        .catch(() => setAddResponse({
                                            status: 'error',
                                            message: 'Wystąpił błąd. Spróbuj ponownie później.'
                                        }))
                                }}>Zapisz kurs {'>'}</StyledButton>
                            </RowWrapper>
                        </ColumnWrapper>
                    );
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
                                        <Button as={Link} to={routes.ROLE_LECTURER.COURSES}>Pokaż listę kursów{'>'}</Button>
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
                                {generateFormByActiveStep(activeStep)}
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
    }
;

export default AddCourse;