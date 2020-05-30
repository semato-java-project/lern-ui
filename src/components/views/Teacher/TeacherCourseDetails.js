import React, {useEffect, useState} from 'react';
import SidebarTemplate from "../../appUIConfig/templates/SidebarTemplate";
import styled, {css} from "styled-components";
import {HorizontalSeparator} from "../../atoms/Shapes/HorizontalSeparator";
import Heading from "../../atoms/Headings/Heading";
import {getDetails, getList, requestTypes} from "../../../services/httpService";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {GroupContainer} from "../../molecules/Containers/GroupContainer";
import {RowWrapper} from "../../molecules/Wrappers/RowWrapper";
import TableInput from "../../atoms/Inputs/TableInput";
import Button from "../../atoms/Buttons/Button";
import ProjectGroupInput from "../../atoms/Inputs/ProjectGroupInput";
import {SpinnerContainer} from "../../molecules/Containers/SpinnerContainer";
import {ACTION_TYPES} from "../../../store/reducers/actionTypes";
import CourseDetailsHeaderContainer from "../../molecules/Containers/CourseDetailsHeaderContainer";
import {TASK_TYPES} from "../../../utils/types";

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


export const IconWrapper = styled.div`
      display: flex;
      width: 4rem;
      height: 6rem;
`;

const StyledSeparator = styled(HorizontalSeparator)`
      width: 80%;
      margin-top: 1.5rem;
`;

export const ContentWrapper = styled.div`
      display: flex;
      width: 100%;
      padding-top: 4rem;
      margin-bottom: 6rem;
      color: ${({theme}) => theme.colors.blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
`;

const MainContentSection = styled.div`
      display: flex;
      flex-direction: column;
      width: 98%;
      height: 100%;
`;

const Table = styled.table`
`;

const Row = styled.tr`
`;

const Header = styled.th`
      height: 2.5rem;
      background-color: ${({theme}) => theme.colors.gray_light};
      min-width: 5rem;
      border-radius: 1rem;
      font-size: ${({theme}) => theme.fontSize.s};
      
      ${({StudentName}) =>
    StudentName &&
    css`
        min-width: 25rem;
      `} 

      ${({disableEdit}) =>
    disableEdit === false &&
    css`
        background-color: ${({theme}) => theme.colors.yellow};
      `}
`;

const Data = styled.td`
      text-align: center;
      height: 3rem;
      margin-top: 1rem;
      background-color: white;
      
      ${({StudentName}) =>
    StudentName &&
    css`
        min-width: 25rem;
      `} 
`;


const translateTaskType = (type, taskQuantity) => {
    switch (type) {
        case TASK_TYPES.EXAM:
            return 'EGZAMIN';
        case TASK_TYPES.PROJECT:
            return 'PROJEKT';
        case TASK_TYPES.DISCUSSIONS: {
            if (taskQuantity > 2) {
                return 'ĆW';
            } else return 'ĆWICZENIA';
        }
        case TASK_TYPES.LAB:
            return 'LAB';
    }
};

export const generateTaskArray = taskList => {
    let index = 0;
    let Tasks = [];

    taskList && taskList.map(task => {
        [...Array(task.quantity)].map(
            (e, i) => {
                index = index + 1;
                Tasks.push({
                    type: translateTaskType(task.taskType, task.quantity),
                    index,
                    number: task.quantity > 1 ? i + 1 : null
                })
            })
    });
    return Tasks;
};

const StyledButton = styled(Button)`
     width: 16rem;
     height: 3.5rem;
     margin: 3rem 0 0;
     font-weight: ${({theme}) => theme.fontWeight.regular};
     
     ${({disableEdit}) =>
    disableEdit === false &&
    css`
        background-color: ${({theme}) => theme.colors.yellow};
        color: ${({theme}) => theme.colors.blue_dark};
      `}
`;


const ProjectGroupSection = ({projectGroups}) => (
    <>
        <Heading marginTop={'4rem'} marginBottom={'2rem'}>Grupy projektowe</Heading>
        <Table>
            <tbody>
            <Row>
                <Header groupNo disableEdit={true}>NUMER GRUPY</Header>
                <Header groupNo disableEdit={true}>SKŁAD GRUPY</Header>
            </Row>
            {projectGroups.map((group, index) =>
                <Row key={index}>
                    <Data groupNo>{index + 1}</Data>
                    <ProjectGroupInput teacher={true} group={group} isProjectDisabled={true}/>
                </Row>
            )}
            </tbody>
        </Table>
    </>
);


const ParticipantList = ({participantList, disableEdit}) => (

    participantList && participantList.map(student =>
        <Row key={student.studentId}>
            <Data StudentName>{student.firstName} {student.lastName}</Data>
            {student.gradeList.map((grade, index) =>
                <TableInput key={index} grade={grade} disableEdit={disableEdit}/>)}
            <TableInput grade={{gradeValue: student.finalGrade, id: null}} disableEdit={true}/>
        </Row>
    )
);

export const Headers = ({taskList, disableEdit}) => (
    <Row>
        <Header StudentName disableEdit={true}>STUDENT</Header>
        {generateTaskArray(taskList).map((task, index)=>
            <Header key={index} disableEdit={disableEdit}>{task.type} {task.number}</Header>)}
        <Header disableEdit={true}>OCENA KONCOWA</Header>
    </Row>
);


export const checkIsProjectIncluded = (taskList) => {
    let indexOfProject = taskList.findIndex(task => task.taskType === TASK_TYPES.PROJECT);
    if (indexOfProject !== -1) return Boolean(taskList[indexOfProject].quantity);
    return false;
};

export const getCourseDetails = async (dispatch, urlParams) => {
    try {
        let {payload} = await dispatch(getDetails(requestTypes.GET_COURSE_DETAILS(urlParams.id)));
        let isProjectIncluded = checkIsProjectIncluded(payload.item.taskList);
        if (isProjectIncluded) dispatch(getList(requestTypes.GET_PROJECT_GROUPS(urlParams.id)));
        return isProjectIncluded;

    } catch (ex) {
        alert(ex.message)
    }
};


const TeacherCourseDetails = () => {

    const dispatch = useDispatch();
    const urlParams = useParams();
    const courseDetails = useSelector(state => state.courseDetails);
    const projectGroups = useSelector(state => state.projectGroups);
    const [disableEdit, setDisableEdit] = useState(true);

    useEffect(() => {
        let isProjectIncluded = getCourseDetails(dispatch, urlParams);

        // --- CLEANUP ---
        return () => {
            dispatch({type: ACTION_TYPES.DATA_CLEANUP, payload: requestTypes.GET_COURSE_DETAILS().itemType});
            if (isProjectIncluded) dispatch({
                type: ACTION_TYPES.DATA_CLEANUP,
                payload: requestTypes.GET_PROJECT_GROUPS().itemType
            })
        }
    }, [dispatch, urlParams]);


    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Szczegóły kursu
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                {courseDetails ?
                    <MainContentSection>
                        <CourseDetailsHeaderContainer
                            courseName={courseDetails.name}
                            courseDescription={courseDetails.description}/>
                        <GroupContainer group={courseDetails.group} showOnly={true}/>
                        <Table>
                            <tbody>
                            <Headers taskList={courseDetails.taskList} disableEdit={disableEdit}/>
                            <ParticipantList participantList={courseDetails.participantList} disableEdit={disableEdit}/>
                            </tbody>
                        </Table>
                        <RowWrapper justifyContent={'flex-end'}>
                            {disableEdit ?
                                <StyledButton onClick={() => setDisableEdit(!disableEdit)}>
                                    Włącz tryb edycji
                                </StyledButton>
                                :
                                <StyledButton disableEdit={disableEdit}
                                              onClick={async () => {
                                                  await dispatch(getDetails(requestTypes.GET_COURSE_DETAILS(urlParams.id)));
                                                  setDisableEdit(!disableEdit)
                                              }}>
                                    Wyłącz tryb edycji
                                </StyledButton>
                            }
                        </RowWrapper>
                        {Boolean(projectGroups) && checkIsProjectIncluded(courseDetails.taskList) &&
                        <ProjectGroupSection projectGroups={projectGroups}/>}
                    </MainContentSection>
                    :
                    <SpinnerContainer/>
                }
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default TeacherCourseDetails;