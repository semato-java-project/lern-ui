import React from "react";
import {CourseIcon} from "../../atoms/Icons/CourseIcon";
import styled from "styled-components";
import Heading from "../../atoms/Headings/Heading";
import arrow_icon from '../../../assets/arrow_icon.svg'
import arrow_icon_active from '../../../assets/arrow_icon_active.svg'
import {Link, useRouteMatch} from "react-router-dom";

const CourseArrowIcon = styled.div`
      height: 2.5rem;
      width: 2rem;
      display: flex;
      background-image: url(${arrow_icon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
`;

export const CourseWrapper = styled.div`
      height: 14rem;
      width: 49%;
      display: flex;
      border-radius: 10px;
      background-color: ${({theme}) => theme.app_background};
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
      position: relative;
      align-items: center;
      cursor: pointer;
      margin-bottom: 4rem;
      transition: background-image .2s ease-in-out;
      text-decoration: none;
      
      &:hover ${CourseArrowIcon}{
              background-image: url(${arrow_icon_active});
      }
    
      &:hover::before {
        background-color: ${({theme}) => theme.app_blue_light};
      }
    
      &::before {
         content: '';
         height: 100%;
         width: 86%;
         border-radius: 10px;
         background-color: ${({theme}) => theme.app_gray};
         transition: background-color .2s ease-in-out;
         display: flex;
         position: absolute;
         margin-top: -0.9rem;
         margin-left: 7%;
         z-index: -10;
         @keyframes slide-course-bar {
          0%   {width: 0;opacity: 0;}
          100% {width: 86%;opacity: 100%;}
         }
         animation: slide-course-bar 0.3s ease-in-out;  
         
         @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
           height: 0;
         }  
      }
`;

const CourseContent = styled.div`
      height: 90%;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 5%;
`;

const CourseArrowWrapper = styled.div`
      height: 90%;
      width: 5%;
      display: flex;
      align-items: flex-end;
      padding-bottom: 1rem;
`;


const LastCourseIcon = styled.div`
      height: 6rem;
      width: 6rem;
      margin-left: 7%;
`;

const CourseNameContainer = styled.div`
      width: 100%;
      display: flex;
`;

const CourseDateContainer = styled.div`
      width: 100%;
      display: flex;
      color: ${({theme}) => theme.app_text_gray};
      font-size: ${({theme}) => theme.fontSize.s};
      margin-top: 0.2rem;
    
    span{
        font-weight: ${({theme}) => theme.fontWeight.semiBold};
        margin-left: 0.5rem;
    }
`;

const CourseInfoContainer = styled.div`
      width: 100%;
      display: flex;
      color: ${({theme}) => theme.app_blue_light};
      font-size: ${({theme}) => theme.fontSize.s};
      margin-top: 0.5rem;
      span{
        font-weight: ${({theme}) => theme.fontWeight.semiBold};
        margin-left: 0.5rem;
    }
`;


const CourseContainer = ({course}) => {

    let match = useRouteMatch();

    return (
        <CourseWrapper as={Link} to={`${match.url}/${course.courseId}`}>
            <LastCourseIcon>
                {CourseIcon()}
            </LastCourseIcon>
            <CourseContent>
                <CourseNameContainer>
                    <Heading>{course.name}</Heading>
                </CourseNameContainer>
                <CourseDateContainer>
                    Utworzony: <span>{new Date(course.createdAt).toLocaleDateString()}</span>
                </CourseDateContainer>
                <CourseDateContainer>
                    Ostatnio edytowany: <span>{new Date(course.updatedAt).toLocaleDateString()} - {new Date(course.updatedAt).toLocaleTimeString()}</span>
                </CourseDateContainer>
                <CourseInfoContainer>
                    Ilośc uczestników: <span>{course.numberOfParticipants}</span>
                </CourseInfoContainer>
            </CourseContent>
            <CourseArrowWrapper>
                <CourseArrowIcon/>
            </CourseArrowWrapper>
        </CourseWrapper>
    )
};

export default CourseContainer;
