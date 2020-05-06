import React, {useEffect} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import NewsSideContainer from "../../components/organisms/News/NewsSideContainer";
import AddCourseSideContainer from "../../components/organisms/Course/AddCourseSideContainer";
import CourseContainer from "../../components/organisms/Course/CourseContainer";
import {getList} from "../../actions";
import {GET_COURSES} from "../../api-config/requestTypes";
import {useDispatch, useSelector} from "react-redux";

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

const CoursesSection = styled.section`
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
`;

const Courses = () => {

    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses || []);

    useEffect(() => {dispatch(getList(GET_COURSES))}, []);

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Twoje kursy
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                <MainContentSection>
                    <CoursesSection>
                        {courses.map(course => <CourseContainer key={course.courseId} course={course}/>)}
                    </CoursesSection>
                </MainContentSection>
                <SideContentSection>
                    <AddCourseSideContainer/>
                    <NewsSideContainer/>
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default Courses;