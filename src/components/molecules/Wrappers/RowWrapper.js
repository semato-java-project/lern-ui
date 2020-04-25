import React from "react";
import styled, {css} from "styled-components";

const Column = styled.div`
      display:flex;
      flex-direction: row;
      width: 100%;
  
    ${({spaceBetween}) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}
`;

export const RowWrapper = ({children,spaceBetween}) => (
    <Column spaceBetween={spaceBetween}>
        {children}
    </Column>
);