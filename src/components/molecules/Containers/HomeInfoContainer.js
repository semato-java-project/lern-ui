import Heading from "../../atoms/Headings/Heading";
import Paragraph from "../../atoms/Paragraphs/Paragraph";
import React from "react";
import styled from "styled-components";

const InfoSection = styled.section`
      display: flex;
      width: 40%;
      text-align: center;
`;

export const HomeInfoContainer = () => (
    <>
        <Heading big>
            System Zarządzania Kursami Studenckimi
        </Heading>
        <InfoSection>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
            </Paragraph>
        </InfoSection>
    </>
);
