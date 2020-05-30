import React from "react";
import styled from "styled-components";

const Column = styled.div`
      display:flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
      margin-bottom: ${({marginBottom}) => marginBottom || 0};;
      margin-top: ${({marginTop}) => marginTop || 0};
`;

export const RowWrapper = ({children,spaceBetween, justifyContent,marginBottom,marginTop}) => (
    <Column spaceBetween={spaceBetween} justifyContent={justifyContent} marginBottom={marginBottom} marginTop={marginTop}>
        {children}
    </Column>
);