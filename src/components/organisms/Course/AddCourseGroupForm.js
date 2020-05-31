import React, {useContext, useEffect} from 'react';
import Heading from "../../atoms/Headings/Heading";
import {GroupContainer} from "../../molecules/Containers/GroupContainer";
import {RowWrapper} from "../../molecules/Wrappers/RowWrapper";
import {createItem, getList, requestTypes} from "../../../services/httpService";
import {ACTION_TYPES} from "../../../store/reducers/actionTypes";
import {ColumnWrapper} from "../../molecules/Wrappers/ColumnWrapper";
import {ADD_PROCESS_STEPS, AddCourseButton, AddCourseContext, ErrorParagraph} from "../../views/Teacher/AddCourse";
import {useDispatch, useSelector} from "react-redux";


const handleSaveCourseAction = async (dispatch, addCourseContext, isGroupStepValid) => {

    if (isGroupStepValid()) {
        try {
            await dispatch(createItem(requestTypes.ADD_COURSE, addCourseContext.courseToAdd));
            addCourseContext.setAddResponse({
                status: 'success',
                message: 'Tworzenie kursu zakończone sukcesem.'
            });
            dispatch({type: ACTION_TYPES.DATA_CLEANUP, payload: 'courseToAdd'});
        } catch (e) {
            addCourseContext.setAddResponse({
                status: 'error',
                message: 'Wystąpił błąd. Spróbuj ponownie później.'
            })
        }
    }
};

const AddCourseGroupForm = () => {

    const dispatch = useDispatch();
    const addCourseContext = useContext(AddCourseContext);
    const groups = useSelector(state => state.groups || []);

    useEffect(() => {
        dispatch(getList(requestTypes.GET_GROUPS))
    }, []);

    const isGroupStepValid = () => {
        if (addCourseContext.courseToAdd.groupId) return true;
        else addCourseContext.setGroupValidationError(true);
        return false;
    };

    return (
        <ColumnWrapper spaceBetween>
            <Heading>Studenci</Heading>
            {groups.map(group =>
                <GroupContainer key={group.id} group={group}
                                setCourseData={addCourseContext.setCourseData}
                                selectedGroupId={addCourseContext.courseToAdd.groupId || null}/>
            )}
            <RowWrapper justifyContent={'space-between'}>
                <AddCourseButton grayColor
                                 onClick={() => addCourseContext.setActiveStep(ADD_PROCESS_STEPS.SET_DETAILS)}>
                    {'<'} Wstecz
                </AddCourseButton>
                {addCourseContext.groupValidationError ? <ErrorParagraph>Nie wybrano grupy.</ErrorParagraph> : null}
                <AddCourseButton onClick={() => handleSaveCourseAction(dispatch, addCourseContext, isGroupStepValid)}>
                    Zapisz kurs {'>'}
                </AddCourseButton>
            </RowWrapper>
        </ColumnWrapper>
    );
};

export default AddCourseGroupForm;