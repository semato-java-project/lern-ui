import React, {useContext, useState} from 'react';
import {ColumnWrapper} from "../../molecules/Wrappers/ColumnWrapper";
import Heading from "../../atoms/Headings/Heading";
import {RowWrapper} from "../../molecules/Wrappers/RowWrapper";
import {ADD_PROCESS_STEPS, AddCourseButton, AddCourseContext} from "../../views/Teacher/AddCourse";
import {InputWithButtons} from "../../molecules/ValueSelectors/InputWithButtons";
import {INPUT_TYPES, TASK_TYPES} from "../../../utils/types";


const AddCourseDetailsForm = () => {

    const addCourseContext = useContext(AddCourseContext);

    // --- EXAM VALUES ---
    const [examValues, setExamValues] = useState({
        quantity: 0,
        markWeight: 0,
        taskType: TASK_TYPES.EXAM
    });

    // --- EXERCISES VALUES ---
    const [discussionsValues, setDiscussionsValues] = useState({
        quantity: 0,
        markWeight: 0,
        taskType: TASK_TYPES.DISCUSSIONS
    });


    // --- EXERCISES VALUES ---
    const [labValues, setLabValues] = useState({
        quantity: 0,
        markWeight: 0,
        maxGroupQuantity: 0,
        taskType: TASK_TYPES.LAB
    });


    // --- EXERCISES VALUES ---
    const [projectValues, setProjectValues] = useState({
        quantity: 0,
        markWeight: 0,
        maxGroupQuantity: 0,
        taskType: TASK_TYPES.PROJECT
    });

    // --- VALUES HANDLER ---
    const setValue = (property, value, handler, prevValues) => {
        handler({...prevValues, [property]: value})
    };

    return (
        <ColumnWrapper>
            <Heading marginTop={'3rem'}>Egzamin</Heading>
            <RowWrapper>
                <InputWithButtons
                    inputType={INPUT_TYPES.NUMBER}
                    value={examValues.quantity}
                    setValue={(value) => setValue('quantity', value, setExamValues, examValues)}
                />
                <InputWithButtons
                    inputType={INPUT_TYPES.WEIGHT}
                    value={examValues.markWeight}
                    setValue={(value) => setValue('markWeight', value, setExamValues, examValues)}
                />
            </RowWrapper>
            <Heading marginTop={'3rem'}>Ćwiczenia</Heading>
            <RowWrapper>
                <InputWithButtons
                    inputType={INPUT_TYPES.NUMBER}
                    value={discussionsValues.quantity}
                    setValue={(value) => setValue('quantity', value, setDiscussionsValues, discussionsValues)}
                />
                <InputWithButtons
                    inputType={INPUT_TYPES.WEIGHT}
                    value={discussionsValues.markWeight}
                    setValue={(value) => setValue('markWeight', value, setDiscussionsValues, discussionsValues)}
                />
            </RowWrapper>
            <Heading marginTop={'3rem'}>Laboratorium</Heading>
            <RowWrapper>
                <InputWithButtons
                    inputType={INPUT_TYPES.NUMBER}
                    value={labValues.quantity}
                    setValue={(value) => setValue('quantity', value, setLabValues, labValues)}
                />
                <InputWithButtons
                    inputType={INPUT_TYPES.WEIGHT}
                    value={labValues.markWeight}
                    setValue={(value) => setValue('markWeight', value, setLabValues, labValues)}
                />
                <InputWithButtons
                    inputType={INPUT_TYPES.PERSON_NUMBER}
                    value={labValues.maxGroupQuantity}
                    width={'13rem'}
                    paddingLeft={'10rem'}
                    setValue={(value) => setValue('maxGroupQuantity', value, setLabValues, labValues)}
                />
            </RowWrapper>
            <Heading marginTop={'3rem'}>Projekt</Heading>
            <RowWrapper>
                <InputWithButtons
                    inputType={INPUT_TYPES.NUMBER}
                    value={projectValues.quantity}
                    setValue={(value) => setValue('quantity', value, setProjectValues, projectValues)}
                />
                <InputWithButtons
                    inputType={INPUT_TYPES.WEIGHT}
                    value={projectValues.markWeight}
                    setValue={(value) => setValue('markWeight', value, setProjectValues, projectValues)}
                />
                <InputWithButtons
                    inputType={INPUT_TYPES.PERSON_NUMBER}
                    value={projectValues.maxGroupQuantity}
                    width={'13rem'}
                    paddingLeft={'10rem'}
                    setValue={(value) => setValue('maxGroupQuantity', value, setProjectValues, projectValues)}
                />
            </RowWrapper>
            <RowWrapper justifyContent={'space-between'} marginTop={'4rem'}>
                <AddCourseButton
                    grayColor
                    onClick={() =>
                        addCourseContext.setActiveStep(ADD_PROCESS_STEPS.SET_NAME_WITH_DESCRIPTION)}>
                    {'<'} Wstecz
                </AddCourseButton>
                <AddCourseButton onClick={() => {
                    addCourseContext.setCourseData(
                        'taskList',
                        [examValues, discussionsValues, labValues, projectValues]
                    );
                    addCourseContext.setActiveStep(ADD_PROCESS_STEPS.SET_GROUP)}}>
                    Następny krok {'>'}
                </AddCourseButton>
            </RowWrapper>
        </ColumnWrapper>
    );
};

export default AddCourseDetailsForm;