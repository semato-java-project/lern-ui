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
      
      ${({valueError, disabled}) =>
        valueError === true && disabled === false &&
        css`
          color: ${({theme}) => theme.colors_error};
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

const TableInput = ({grade, disableEdit}) => {

        const inputRef = useRef();
        const [editableGrade, setEditableGrade] = useState(grade.gradeValue);
        const [valueError, setValueError] = useState(false);
        const dispatch = useDispatch();

        const editGradeRequest = () => {
            if (editableGrade % 0.5 === 0) {
                if (valueError) setValueError(false);
                dispatch(updateItem(EDIT_GRADE(grade.id), {grade: editableGrade, id: grade.id}))
            } else setValueError(true);
        };

        const changeValue = e => {
            let value = parseFloat(e.target.value).toFixed(1);
            if (value > 5) value = 5.0;
            if (value < 2) value = 2.0;
            setEditableGrade(value);
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Enter') inputRef.current.blur();
        };


        const showGrade = () => {
            if (disableEdit) {
                if (grade.gradeValue) return parseFloat(grade.gradeValue).toFixed(1);
                else return '';
            } else if (editableGrade) {
                return parseFloat(editableGrade).toFixed(1);
            } else return '';
        };

        return (
            <Data>
                <Input valueError={valueError} ref={inputRef} disabled={disableEdit} onBlur={editGradeRequest} type="number"
                       value={showGrade()} step="0.5" min="2.0" max='5.0'
                       onChange={changeValue} onKeyDown={handleKeyDown}/>
            </Data>
        )
    }
;


export default TableInput;