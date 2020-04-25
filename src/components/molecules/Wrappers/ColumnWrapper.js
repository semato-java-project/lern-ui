import React from "react";
import styled from "styled-components";

const Column = styled.div`
      display:flex;
      flex-direction: column;
      width: 100%;
`;

export const ColumnWrapper = ({children}) => (
    <Column>
        {children}
    </Column>

);