import React from "react";
import styled from "styled-components";
import {UserPathShape} from "../../atoms/Shapes/UserPathSHape";
import {PersonIcon} from "../../atoms/Icons/PersonIcon";
import LogoutButton from "../../atoms/Button/LogoutButton";

const CurrentUserWrapper = styled.div`
   display: flex;
   min-width: 30%;
   position:absolute;
   height: auto;
   justify-self: flex-end;
   justify-items: flex-end;
   justify-content: flex-end;
   top: 0;
   right: 5rem;
   z-index: 15;
`;

const CurrentUserInfo = styled.div`
   display: flex;
   position: relative;
   width: auto;
   height: 4rem;
   margin-top: 3rem;
   z-index: 15;
   align-items: center;
   justify-content: flex-end;
   padding-right: 2.5rem;
`;

const NameWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 1.5rem;
   color: ${({theme}) => theme.app_blue_dark};
   
   p{
   margin: 0;
   padding: 0;
   font-size: 1rem;
  color: ${({theme}) => theme.app_yellow};
   }
`;

const CurrentUser = () => {

    return (
        <CurrentUserWrapper>
            <UserPathShape/>
            <CurrentUserInfo>
                {PersonIcon('small')}
                <NameWrapper>
                    <span>Andrzej Piaseczny</span>
                    <p>Wykładowca</p>
                </NameWrapper>
                <LogoutButton>Wyloguj</LogoutButton>
            </CurrentUserInfo>
        </CurrentUserWrapper>
    )
};

export default CurrentUser;
