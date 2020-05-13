import React, {useEffect, useState} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled, {css} from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import Heading from "../../components/atoms/Headings/Heading";
import {GET_COURSE_DETAILS, GET_PROJECT_GROUPS} from "../../api-config/requestTypes";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {GroupContainer} from "../../components/molecules/Containers/GroupContainer";
import {CourseIcon} from "../../components/atoms/Icons/CourseIcon";
import {RowWrapper} from "../../components/molecules/Wrappers/RowWrapper";
import Paragraph from "../../components/atoms/Paragraphs/Paragraph";
import TableInput from "../../components/atoms/Input/TableInput";
import ProjectGroupInput from "../../components/atoms/Input/ProjectGroupInput";
import {SpinnerContainer} from "../../components/molecules/Containers/SpinnerContainer";
import {ACTION_TYPES} from "../../reducers/actionTypes";
import {IconWrapper} from "../Teacher/TeacherCourseDetails";
import {getDetails, getList} from "../../actions";

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
      width: 98%;
      height: 100%;
`;

const Table = styled.table`
`;

const Row = styled.tr`
`;

const Header = styled.th`
      height: 2.5rem;
      background-color: ${({theme}) => theme.app_gray_light};
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
        background-color: ${({theme}) => theme.app_yellow};
      `}
      
      ${({groupNo}) =>
    groupNo &&
    css`
      width:8rem;
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

    ${({groupNo}) =>
    groupNo &&
    css`
              width: 8rem;
      `} 
`;


const translateTaskType = (type, taskQuantity) => {
    switch (type) {
        case 'EXAM':
            return 'EGZAMIN';
        case 'PROJECT':
            return 'PROJEKT';
        case 'DISCUSSIONS': {
            if (taskQuantity > 2) {
                return 'ĆW';
            } else return 'ĆWICZENIA';
        }
        case 'LAB':
            return 'LAB';
        default:
            return 'NULL'
    }
};

const generateTaskArray = taskList => {
    let index = 0;
    let Tasks = [];

    taskList.map(task => {
        [...Array(task.quantity)].map(
            (e, i) => {
                index = index + 1;
                // --- INDEX RESOLVES PROBLEM WITH THE SAME KEYS INSIDE MAP ---
                Tasks.push({
                    type: translateTaskType(task.taskType, task.quantity),
                    index: index,
                    number: task.quantity > 1 ? i + 1 : null
                })
            })
    });
    return Tasks;
};

const StudentCourseDetails = () => {

    const dispatch = useDispatch();
    const urlParams = useParams();
    const courseDetails = useSelector(state => state.courseDetails);
    const projectGroups = useSelector(state => state.projectGroups);
    const [isProjectDisabled, setIsProjectDisabled] = useState(false);

    const isProjectIncluded = (taskList = courseDetails.taskList) => taskList.filter(task => task.taskType === 'PROJECT').length;

    const getCourseDetails = async () => {
        let {payload} = await dispatch(getDetails(GET_COURSE_DETAILS(urlParams.id)));

        const isProjectIncludedValue = isProjectIncluded(payload.item.taskList);
        if (isProjectIncludedValue) dispatch(getList(GET_PROJECT_GROUPS(urlParams.id)));

        return isProjectIncludedValue;
    };


    useEffect(() => {

        let isProjectIncludedValue = getCourseDetails();

        // --- CLEANUP ---W
        return () => {
            dispatch({type: ACTION_TYPES.DATA_CLEANUP, payload: GET_COURSE_DETAILS().itemType});
            if (isProjectIncludedValue) dispatch({
                type: ACTION_TYPES.DATA_CLEANUP,
                payload: GET_PROJECT_GROUPS().itemType
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
                {courseDetails ? <MainContentSection>
                    <RowWrapper>
                        <IconWrapper>
                            {CourseIcon()}
                        </IconWrapper>
                        <Heading marginLeft={'2rem'} fontSize={'2.2rem'}>{courseDetails.name}</Heading>
                    </RowWrapper>
                    <Paragraph marginTop={'1rem'} marginLeft={'5rem'}>
                        {courseDetails.description}
                    </Paragraph>
                    {courseDetails && <GroupContainer group={courseDetails.group} showOnly={true}/>}
                    <Table>
                        <tbody>
                        <Row>
                            <Header StudentName disableEdit={true}>STUDENT</Header>
                            {courseDetails.taskList &&
                            generateTaskArray(courseDetails.taskList)
                                .map(task =>
                                    <Header disableEdit={true} key={task.index}>{task.type} {task.number}</Header>)}
                            <Header disableEdit={true}>OCENA KONCOWA</Header>
                        </Row>
                        {courseDetails.participantList &&
                        courseDetails.participantList.map(student =>
                            <Row key={student.studentId}>
                                <Data StudentName>{student.firstName} {student.lastName}</Data>
                                {student.gradeList
                                    .map(grade =>
                                        <TableInput key={grade.id} grade={grade} disableEdit={true}/>)}
                                <TableInput grade={{gradeValue: student.finalGrade, id: null}} disableEdit={true}/>
                            </Row>
                        )}
                        </tbody>
                    </Table>
                    {projectGroups && isProjectIncluded() &&
                    <>
                        <Heading marginTop={'4rem'} marginBottom={'2rem'}>Grupy projektowe</Heading>
                        <Table>
                            <tbody>
                            <Row>
                                <Header groupNo disableEdit={true}>NUMER GRUPY</Header>
                                <Header groupNo disableEdit={true}>SKŁAD GRUPY</Header>
                            </Row>
                            {projectGroups.map((group, index) =>
                                <Row>
                                    <Data groupNo>{index + 1}</Data>
                                    <ProjectGroupInput group={group}
                                                       isProjectDisabled={group.studentResponseList.length >= group.maxGroupQuantity ? true : isProjectDisabled}
                                                       setIsProjectDisabled={setIsProjectDisabled}/>
                                </Row>)
                            }
                            {!isProjectDisabled && <Row>
                                <Data>-</Data>
                                <ProjectGroupInput isProjectDisabled={isProjectDisabled}
                                                   setIsProjectDisabled={setIsProjectDisabled}/>
                            </Row>}
                            </tbody>
                        </Table>
                    </>
                    }
                </MainContentSection> : <SpinnerContainer/>}
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default StudentCourseDetails;