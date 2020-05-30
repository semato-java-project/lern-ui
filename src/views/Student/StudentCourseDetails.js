import React, {useEffect, useState} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled, {css} from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import Heading from "../../components/atoms/Headings/Heading";
import {GET_COURSE_DETAILS, GET_PROJECT_GROUPS} from "../../api-config/requestTypes";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {GroupContainer} from "../../components/molecules/Containers/GroupContainer";
import TableInput from "../../components/atoms/Input/TableInput";
import ProjectGroupInput from "../../components/atoms/Input/ProjectGroupInput";
import {SpinnerContainer} from "../../components/molecules/Containers/SpinnerContainer";
import {ACTION_TYPES} from "../../reducers/actionTypes";
import {checkIsProjectIncluded, getCourseDetails, Headers} from "../Teacher/TeacherCourseDetails";
import CourseDetailsHeaderContainer from "../../components/molecules/Containers/CourseDetailsHeaderContainer";

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

const ProjectGroupSection = ({projectGroups, isProjectDisabled, setIsProjectDisabled}) => (
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
);

const ParticipantList = ({participantList}) => (

    participantList && participantList.map(student =>
        <Row key={student.studentId}>
            <Data StudentName>{student.firstName} {student.lastName}</Data>
            {student.gradeList.map(grade =>
                <TableInput key={grade.id} grade={grade} disableEdit={true}/>)}
            <TableInput grade={{gradeValue: student.finalGrade, id: null}} disableEdit={true}/>
        </Row>
    )
);


const StudentCourseDetails = () => {

    const dispatch = useDispatch();
    const urlParams = useParams();
    const courseDetails = useSelector(state => state.courseDetails);
    const projectGroups = useSelector(state => state.projectGroups);
    const [isProjectDisabled, setIsProjectDisabled] = useState(false);

    useEffect(() => {
        let isProjectIncluded = getCourseDetails(dispatch, urlParams);

        // --- CLEANUP ---
        return () => {
            dispatch({type: ACTION_TYPES.DATA_CLEANUP, payload: GET_COURSE_DETAILS().itemType});
            if (isProjectIncluded) dispatch({
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
                {courseDetails ?
                    <MainContentSection>
                        <CourseDetailsHeaderContainer
                            courseName={courseDetails.name}
                            courseDescription={courseDetails.description}/>
                        <GroupContainer group={courseDetails.group} showOnly={true}/>
                        <Table>
                            <tbody>
                            <Headers taskList={courseDetails.taskList} disableEdit={true}/>
                            <ParticipantList participantList={courseDetails.participantList}/>
                            </tbody>
                        </Table>
                        {Boolean(projectGroups) && checkIsProjectIncluded(courseDetails.taskList) &&
                        <ProjectGroupSection
                            isProjectDisabled={isProjectDisabled}
                            setIsProjectDisabled={setIsProjectDisabled}
                            projectGroups={projectGroups}
                        />}
                    </MainContentSection>
                    :
                    <SpinnerContainer/>
                }
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default StudentCourseDetails;