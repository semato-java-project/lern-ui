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
import {addItem, fetchItems} from "../../actions";
import {ADD_COURSE, GET_GROUPS} from "../../api-config/requestTypes";

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

const AddCourseFormSection = styled.section`
      display: flex;
      width: 100%;
      margin-top: 4rem;
`;

const StyledButton = styled(Button)`
     width: 16rem;
     min-height: 1rem;
     height: 4rem;
     margin: 2rem 0 0;
     font-weight: ${({theme}) => theme.fontWeight.regular};
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
            console.log(property, value); //TODO: remove logs
            handler({...prevValues, [property]: value})
        };


        const setCourseData = (type, data) => dispatch({
            type: ACTION_TYPES.SET_COURSE_TO_ADD,
            payload: {...courseToAdd, [type]: data}
        });

        useEffect(() => {
            if (activeStep === ADD_PROCESS_STEPS.SET_GROUP) dispatch(fetchItems(GET_GROUPS))
        }, [activeStep]);


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
                                onChange={(e) => setCourseData('name', e.target.value)}
                            />
                            <Heading marginTop={'4rem'}>Opis kursu</Heading>
                            <TextArea
                                placeholder={'Wprowadź opis kursu...'}
                                width={'100%'}
                                value={courseToAdd.description}
                                onChange={(e) => setCourseData('description', e.target.value)}
                            />
                            <RowWrapper spaceBetween>
                                <p></p>
                                <StyledButton onClick={() => setActiveStep(ADD_PROCESS_STEPS.SET_DETAILS)}>Następny
                                    krok {'>'}</StyledButton>
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
                            <RowWrapper spaceBetween>
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
                            <RowWrapper spaceBetween>
                                <StyledButton grayColor
                                              onClick={() => setActiveStep(ADD_PROCESS_STEPS.SET_DETAILS)}>{'<'} Wstecz</StyledButton>
                                <StyledButton onClick={() => {
                                    dispatch(addItem(ADD_COURSE, courseToAdd))
                                        .then(() => setAddResponse({status: 'success', message: 'Tworzenie kursu zakończone sukcesem.'}))
                                        .catch(() => setAddResponse({status: 'error', message: 'Wystąpił błąd. Spróbuj ponownie później.'}))
                                }}>Zapisz
                                    kurs {'>'}</StyledButton>
                            </RowWrapper>
                        </ColumnWrapper>
                    )
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
                            <p>{addResponse.message}</p>
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
                        sdfsd
                    </SideContentSection>
                </ContentWrapper>
            </SidebarTemplate>
        );
    }
;

export default AddCourse;