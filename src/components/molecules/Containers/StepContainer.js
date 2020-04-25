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

export const StepContainer = ({stepNo, stepName, isStepActive}) => (
    <Wrapper>
        <CircleIcon width={'5rem'} height={'2rem'} insideColor={isStepActive?'#3c4bad' : '#B2B2B2'} outsideColor={isStepActive? 'url(#linear-gradient)' : '#D1D2D5'}/>
        <ColumnWrapper>
            <Paragraph>Krok {stepNo}</Paragraph>
            <Heading>{stepName}</Heading>
        </ColumnWrapper>
    </Wrapper>
);
