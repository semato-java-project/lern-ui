import styled, {css} from 'styled-components';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {createItem, getList, updateItem} from "../../../actions";
import {ADD_PROJECT_GROUP, EDIT_PROJECT_GROUP, GET_PROJECT_GROUPS} from "../../../api-config/requestTypes";
import {useParams} from "react-router-dom";

const Input = styled.div`
      display: flex;
      margin-top: ${({marginTop}) => marginTop || '0'};
      height: ${({height}) => height || '100%'};
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      border: none;
      width: ${({width}) => width || '100%'};
      text-align: center;
      border-radius: 1rem;
      background-color: white;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position:relative;
      
      &::after{
      content: 'Dołącz >';
      display:none;
      position:absolute;
      right: 1rem;
      z-index: 10;
      font-size: 1rem
      }
      
      &:hover{
            background-color: ${({theme}) => theme.app_gray_light};
            &::after{
            display:flex;
            }
      }
      
      ${({addGroup}) =>
    addGroup && css`
        &:hover{
            &::after{
            display:none;
            }
         }
      `}

    ${({isProjectDisabled}) =>
    isProjectDisabled === true && css`
      cursor: default;
        &:hover{
          background-color: white;
            &::after{
            display:none;
            }
         }
      `} 
`;


const Data = styled.td`
      text-align: center;
      height: 3rem;
      margin-top: 1rem;
      background-color: white;
      
      ${({StudentName}) =>
    StudentName &&
    css`
        min-width: 25rem;
      `} 
`;

const ProjectGroup = ({group, isProjectDisabled, setIsProjectDisabled, lecturer = false}) => {

    const dispatch = useDispatch();
    const urlParams = useParams();
    const currentUser = useSelector(state => state.currentUser);

    const addProjectGroupTrigger = () => {
        dispatch(createItem(ADD_PROJECT_GROUP(urlParams.id)))
            .then(() => dispatch(getList(GET_PROJECT_GROUPS(urlParams.id))))
    };

    const joinToGroupTrigger = id => {
        dispatch(updateItem(EDIT_PROJECT_GROUP(id)))
            .then(() => dispatch(getList(GET_PROJECT_GROUPS(urlParams.id))))
    };

    const getStudentList = (students) => {
        const array = [];
        students.forEach(student => {
            if (student.id.toString() === currentUser.id && !lecturer) setIsProjectDisabled(true);
            array.push(` ${student.firstName} ${student.lastName}`);
        });
        return array;
    };

    return (
        <Data>
            {group ?
                <Input isProjectDisabled={isProjectDisabled}
                       onClick={() => {
                           if (!isProjectDisabled) joinToGroupTrigger(group.projectGroupId)
                       }}>{getStudentList(group.studentResponseList).toString()}</Input>
                :
                <Input isProjectDisabled={isProjectDisabled} addGroup onClick={() => {
                    if (!isProjectDisabled) addProjectGroupTrigger()
                }}>Utwórz grupę {'>'}</Input>
            }
        </Data>
    )
};

export default ProjectGroup;