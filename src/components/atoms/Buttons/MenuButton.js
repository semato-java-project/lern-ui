import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const MenuItemImage = styled.div`
      height: 24px;
      width: 24px;
      margin-right: 10px;
      margin-left: 20px;
      background-image: url(${props => props.path});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
`;

const MenuItemWrapper = styled.div`
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      border-radius: 1.5rem;
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      list-style: none;
      text-decoration: none;
      color: ${({theme}) => theme.colors.background_white};
      margin-bottom: 2rem;
      
      transition: all .15s;
      transition-delay: .03s;
      background-position: 0;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${({ theme }) => theme.colors.yellow} 50%);
      background-size: 220%;
      
      &.active:before {
        content: ''; 
        display: flex;
        position: absolute;
        left: -1rem;
        height: 4rem;
        width: 2rem;
        border-radius: 1.5rem;
        background-color: ${({theme}) => theme.colors.yellow};
      }
      
      &:hover{
        color: ${({theme}) => theme.colors.blue_dark};
        background-position: 100%;
       }
      &:hover ${MenuItemImage}{
        background-image: url(${props => props.icon_active});
        transition-delay: .1s;
      }
      &.active {
        background-color: ${({theme}) => theme.colors.yellow};
        color: ${({theme}) => theme.colors.blue_dark};

      } 
      &.active ${MenuItemImage}{
        background-image: url(${props => props.icon_active});
      }
`;

const MenuButton = ({option, route, path, icon_active}) => (
    <MenuItemWrapper as={NavLink} to={route} activeclass="active" icon_active={icon_active}>
        <MenuItemImage path={path} icon_active={icon_active}/>
        {option}
    </MenuItemWrapper>
);

export default MenuButton;