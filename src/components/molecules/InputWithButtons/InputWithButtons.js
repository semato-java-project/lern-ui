import React from "react";
import Paragraph from "../../atoms/Paragraphs/Paragraph";
import styled from "styled-components";
import {theme} from '../../../theme/mainTheme'
import InputControlled from "../../atoms/Input/InputControlled";
import {PlusIcon} from "../../atoms/Icons/PlusIcon";
import {MinusIcon} from "../../atoms/Icons/MinusIcon";

const TypeInfo = styled(Paragraph)`
      position: absolute;
      left: 1.5rem;
      top: 33%;
      
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
`;

const Wrapper = styled.div`
      display:flex;
      width: auto;
      height: auto;
      position:relative;
      margin-top: 1rem;
      align-items: center;
      margin-right: 3rem;  
`;

const ActionButton = styled.div`
      display:flex;
      width: 3rem;
      height: 3rem;
      border-radius: 1rem;
      justify-content: center;
      align-items: center;
      margin-left: ${({marginLeft}) => marginLeft || '1rem'};
      background-color: ${({theme, backgroundColor}) => backgroundColor || theme.app_blue_dark};
      cursor: pointer;
`;

export const InputWithButtons = ({inputType, width, paddingLeft, value, setValue}) => {

    return (
        <Wrapper>
            <TypeInfo>{inputType}</TypeInfo>
            <InputControlled onChange={(e) => setValue(e.target.value)}
                             onBlur={() => {if(value==='') setValue(0)}}
                             withShadow type='number' value={value}
                             width={width} paddingLeft={paddingLeft}/>
            <ActionButton onClick={() => value && setValue(value - 1)}><MinusIcon/></ActionButton>
            <ActionButton onClick={() => setValue(value + 1)} marginLeft={'0.5rem'}
                          backgroundColor={theme.app_yellow}><PlusIcon/></ActionButton>
        </Wrapper>
    )
};