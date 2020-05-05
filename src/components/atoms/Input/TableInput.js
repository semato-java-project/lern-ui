import styled, {css} from 'styled-components';
import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {updateItem} from "../../../actions";
import {EDIT_GRADE} from "../../../api-config/requestTypes";

const Input = styled.input`
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
      
      &:hover{
            background-color: ${({theme}) => theme.app_gray_light};
      }

      ::placeholder {
        color: ${({theme}) => theme.app_text_gray};
      }
      &:focus{
         outline: none;
      }
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

const TableInput = ({grade, disableEdit}) => {

    const inputRef = useRef();
    const [editableGrade, setEditableGrade] = useState(grade.gradeValue);
    const dispatch = useDispatch();

    const editGradeRequest = () => {
        dispatch(updateItem(EDIT_GRADE(grade.id), {grade: editableGrade, id: grade.id}))
    };

    const changeValue = e => {

        let value = e.target.value.replace(/,/g, '.');
        setEditableGrade(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') inputRef.current.blur();
    };

    return (
        <Data>
            <Input ref={inputRef} disabled={disableEdit} onBlur={editGradeRequest} type="number"
                   value={editableGrade? parseFloat(editableGrade).toFixed(1) : ''} step="0.5" min="2.0" max='5.0'
                   onChange={changeValue} onKeyDown={handleKeyDown}/>
        </Data>
    )
};


export default TableInput;