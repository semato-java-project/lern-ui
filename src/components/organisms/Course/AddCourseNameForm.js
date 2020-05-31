import React, {useContext} from 'react';
import {ColumnWrapper} from "../../molecules/Wrappers/ColumnWrapper";
import Heading from "../../atoms/Headings/Heading";
import Input from "../../atoms/Inputs/Input";
import TextArea from "../../atoms/Textareas/Textarea";
import {RowWrapper} from "../../molecules/Wrappers/RowWrapper";
import {ADD_PROCESS_STEPS, AddCourseButton, AddCourseContext, ErrorParagraph} from "../../views/Teacher/AddCourse";

const AddCourseNameForm = () => {

    const addCourseContext = useContext(AddCourseContext);

    const isFirstStepValid = () => {
        if (addCourseContext.courseToAdd.name
            && addCourseContext.courseToAdd.description
            && addCourseContext.courseToAdd.name.trim() !== ''
            && addCourseContext.courseToAdd.description.trim() !== '')
            return true;
        else
            addCourseContext.setValidationError(true);
        return false;
    };


    return (
        <ColumnWrapper>
            <Heading>Nazwa kursu</Heading>
            <Input
                withShadow
                placeholder={'Wprowadź nazwę kursu...'}
                marginTop={'1rem'}
                width={'40rem'}
                value={addCourseContext.courseToAdd.name}
                onFocus={() =>
                    addCourseContext.validationError
                    && addCourseContext.setValidationError(false)}
                onChange={(e) =>
                    addCourseContext.setCourseData('name', e.target.value)}
            />
            <Heading marginTop={'4rem'}>Opis kursu</Heading>
            <TextArea
                placeholder={'Wprowadź opis kursu...'}
                width={'100%'}
                value={addCourseContext.courseToAdd.description}
                onFocus={() =>
                    addCourseContext.validationError
                    && addCourseContext.setValidationError(false)}
                onChange={(e) =>
                    addCourseContext.setCourseData('description', e.target.value)}
            />
            <RowWrapper justifyContent={'space-between'}>
                {addCourseContext.validationError ?
                    <ErrorParagraph>Nie wszystkie pola zostały uzupełnione</ErrorParagraph> : <span/>
                }
                <AddCourseButton
                    onClick={() =>
                        isFirstStepValid() && addCourseContext.setActiveStep(ADD_PROCESS_STEPS.SET_DETAILS)}>
                    Następny krok {'>'}
                </AddCourseButton>
            </RowWrapper>
        </ColumnWrapper>
    );
};

export default AddCourseNameForm;