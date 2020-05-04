import React, {useEffect, useState} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled, {css} from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import Heading from "../../components/atoms/Headings/Heading";
import {fetchItemDetails} from "../../actions";
import {GET_COURSE_DETAILS} from "../../api-config/requestTypes";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {GroupContainer} from "../../components/molecules/Containers/GroupContainer";
import {CourseIcon} from "../../components/atoms/Icons/CourseIcon";
import {RowWrapper} from "../../components/molecules/Wrappers/RowWrapper";
import Paragraph from "../../components/atoms/Paragraphs/Paragraph";
import TableInput from "../../components/atoms/Input/TableInput";
import Button from "../../components/atoms/Button/Button";

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

const SideContentSection = styled.div`
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;
      color: ${({theme}) => theme.app_blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
      padding: 2rem 3rem 0;
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

const StyledButton = styled(Button)`
     width: 16rem;
     min-height: 1rem;
     height: 3.5rem;
     margin: 3rem 0 0;
     font-weight: ${({theme}) => theme.fontWeight.regular};
     
     ${({disableEdit}) =>
    disableEdit === false &&
    css`
        background-color: ${({theme}) => theme.app_yellow};
        color: ${({theme}) => theme.app_blue_dark};
      `}
`;



//TODO: make spinner round
const Spinner = styled.div`
display:flex;
    margin: 50px auto;
  font-size: 3rem;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(129,129,129, 0.2);
  border-right: 1.1em solid rgba(129,129,129, 0.2);
  border-bottom: 1.1em solid rgba(129,129,129, 0.2);
  border-left: 1.1em solid #818181;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
    
    &::after {
    content: '';
    border-radius: 50%;
    width: 5em;
    height: 5em;
}
@-webkit-keyframes load8 {
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
    100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes load8 {
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
    100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
`;

const StudentCourseDetails = () => {

    const dispatch = useDispatch();
    const urlParams = useParams();
    const courseDetails = useSelector(state => state.courseDetails);

    useEffect(() => {
        dispatch(fetchItemDetails(GET_COURSE_DETAILS, urlParams.id))
    }, [dispatch, urlParams]);

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Szczegóły kursu
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                {courseDetails? <MainContentSection>
                    <RowWrapper>
                        {CourseIcon()}
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
                            {courseDetails.taskList && generateTaskArray(courseDetails.taskList).map(task => <Header
                                disableEdit={true} key={task.index}>{task.type} {task.number}</Header>)}
                        </Row>
                        {courseDetails.participantList && courseDetails.participantList.map(student =>
                            <Row>
                                <Data StudentName>{student.firstName} {student.lastName}</Data>
                                {student.gradeList.map(grade => <TableInput grade={grade} disableEdit={true}/>)}
                            </Row>
                        )}
                        </tbody>
                    </Table>
                </MainContentSection> : <Spinner/>}
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default StudentCourseDetails;