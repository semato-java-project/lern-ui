import React from "react";
import styled from "styled-components";
import {USER_ROLES} from "../../../utils/userRoles";
import {MENU_ITEMS} from "../../../utils/menuItems";
import MenuButton from "../../atoms/Button/MenuButton";
import {useSelector} from "react-redux";

const MenuShape = styled.div`
   display: flex;
   height: 100vh;
   width: 15%;
   min-width: 22rem;
   position: fixed;
   justify-content: center;
   background-color: ${({theme}) => theme.app_blue_dark};
   border-right: 10px solid ${({theme}) => theme.app_yellow};
`;

const NavWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 60%;
   margin-top: 24rem;
`;

const getRoleBasedResources = (role) => {
    switch (role) {
        case USER_ROLES.ROLE_STUDENT.API_NAME:
            return (
                <>
                    {MENU_ITEMS.STUDENT_ITEMS.map(item => <MenuButton key={item.option} option={item.option}
                                                                      route={item.route}
                                                                      path={item.icon}
                                                                      icon_active={item.icon_active}/>)}
                </>
            );
        case USER_ROLES.ROLE_LECTURER.API_NAME:
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

const Menu = () => {

    const role = useSelector(state => state.currentUser.role);

    return (
        <MenuShape>
            <NavWrapper>
                {getRoleBasedResources(role)}
            </NavWrapper>
        </MenuShape>
    )
};

export default Menu;
