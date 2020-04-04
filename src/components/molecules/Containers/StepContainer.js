import {CircleIcon} from "../../atoms/Icons/CircleIcon";
import {ColumnWrapper} from "../Wrappers/ColumnWrapper";
import Paragraph from "../../atoms/Paragraphs/Paragraph";
import Heading from "../../atoms/Headings/Heading";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-width: 5rem;
    height: 5rem;
    margin-top: 1.5rem;
`;

export const StepContainer = ({stepNo, stepName, insideColor, outsideColor}) => (
    <Wrapper>
        <CircleIcon width={'5rem'} height={'2rem'} insideColor={insideColor} outsideColor={outsideColor}/>
        <ColumnWrapper>
            <Paragraph>Krok {stepNo}</Paragraph>
            <Heading>{stepName}</Heading>
        </ColumnWrapper>
    </Wrapper>
);
