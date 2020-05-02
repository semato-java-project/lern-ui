import React from "react";
import styled, {css} from "styled-components";

const Column = styled.div`
      display:flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
`;

export const RowWrapper = ({children,spaceBetween, justifyContent}) => (
    <Column spaceBetween={spaceBetween} justifyContent={justifyContent}>
        {children}
    </Column>
);