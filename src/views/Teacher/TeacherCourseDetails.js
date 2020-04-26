import React, {useEffect} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled, {css} from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import Heading from "../../components/atoms/Headings/Heading";
import {fetchItemDetails} from "../../actions";
import {GET_COURSE_DETAILS} from "../../api-config/requestTypes";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

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
      width: 100%;
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
//border-spacing: 0.5rem;
`;

const Row = styled.tr`
`;

const Header = styled.th`
      height: 2rem;
      background-color: ${({theme}) => theme.app_yellow};
      min-width: 5rem;
      border-radius: 1rem;

      ${({StudentName}) =>
        StudentName &&
        css`
      min-width: 20rem;
      `}
`;

const Data = styled.td`
      text-align: center;
      height: 3rem;
      margin-top: 1rem;
      border-radius: 1rem;
      background-color: ${({theme}) => theme.app_gray_light};
`;



const translateTaskType = (type, taskQuantity)=> {
    switch (type) {
        case 'EXAM': return 'EGZAMIN';
        case 'PROJECT': return 'PROJEKT';
        case 'DISCUSSIONS': {

            console.log(taskQuantity);
            if(taskQuantity > 2){
                return 'ĆW';
            } else return 'ĆWICZENIA';
        }
        case 'LAB': return 'LAB';
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
                Tasks.push({type: translateTaskType(task.taskType, task.quantity), index: index, number: task.quantity > 1 ? i + 1 : null})
            })
    });
    return Tasks;
};


const TeacherCourseDetails = () => {

    const dispatch = useDispatch();
    const urlParams = useParams();
    const courseDetails = useSelector(state => state.courseDetails || {});

    useEffect(() => {
        dispatch(fetchItemDetails(GET_COURSE_DETAILS, urlParams.id))
    }, [dispatch, urlParams]);

    return (
        <SidebarTemplate>
            {console.log(courseDetails)}
            <HeaderPathInfoContainer>
                Szczegóły kursu
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                <MainContentSection>
                    <Heading>{courseDetails.name}</Heading>

                    <Table>
                        <tbody>
                        <Row>
                            <Header StudentName>Student</Header>
                            {generateTaskArray(courseDetails.taskList).map(task => <Header
                                key={task.index}>{task.type} {task.number}</Header>)}
                        </Row>
                            {courseDetails.participantList.map(student =>
                                <Row>
                                    <Data StudentName>{student.firstName} {student.lastName}</Data>
                                    {student.gradeList.map(grade => <Data>{grade.gradeValue || '-'}</Data> )}
                                </Row>

                            )}
                        </tbody>
                    </Table>
                </MainContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default TeacherCourseDetails;