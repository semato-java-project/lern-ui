import Paragraph from "../../atoms/Paragraphs/Paragraph";
import Heading from "../../atoms/Headings/Heading";
import React from "react";
import {RowWrapper} from "../Wrappers/RowWrapper";
import {CourseIcon} from "../../atoms/Icons/CourseIcon";
import {IconWrapper} from "../../views/Teacher/TeacherCourseDetails";

const CourseDetailsHeaderContainer = ({courseName, courseDescription}) => (
    <>
        <RowWrapper>
            <IconWrapper>
                {CourseIcon()}
            </IconWrapper>
            <Heading marginLeft={'2rem'} fontSize={'2.2rem'}>{courseName}</Heading>
        </RowWrapper>
        <Paragraph marginTop={'1rem'} marginLeft={'5rem'}>{courseDescription}</Paragraph>
    </>
);

export default CourseDetailsHeaderContainer;
