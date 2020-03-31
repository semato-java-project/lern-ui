import React from "react";
import styled from "styled-components";
import {USER_ROLES} from "../../../utils/userRoles";
import {MENU_ITEMS} from "../../../utils/menuItems";
import MenuButton from "../../atoms/Button/MenuButton";

const MenuShape = styled.div`
   display: flex;
   height: 100vh;
   width: 15%;
   position: fixed;
   justify-content: center;
   background-color: ${({theme}) => theme.app_blue_dark};
   border-right: 10px solid ${({theme}) => theme.app_yellow};;
`;

const NavWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 60%;
   margin-top: 24rem;
`;

const getRoleBasedResources = ({role}) => {
    switch (role) {
        case USER_ROLES.STUDENT_ROLE:
            return (
                <>
                    student
                </>
            );
        case USER_ROLES.TEACHER_ROLE:
            return (
                <>
                    {MENU_ITEMS.TEACHER_ITEMS.map(item => <MenuButton key={item.option} option={item.option}
                                                                      route={item.route}
                                                                      path={item.icon}
                                                                      icon_active={item.icon_active}/>)}
                </>
            );
        default:
            break;
    }
};

//TODO: add currentUser to get resources
const Menu = () => {

    return (
        <MenuShape>
            <NavWrapper>
            {getRoleBasedResources({role: USER_ROLES.TEACHER_ROLE})}
            </NavWrapper>
        </MenuShape>
    )
};

export default Menu;
