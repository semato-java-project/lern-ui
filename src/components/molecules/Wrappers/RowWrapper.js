import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
`;

export const RowWrapper = ({children}) => (
    <Column>
        {children}
    </Column>

);