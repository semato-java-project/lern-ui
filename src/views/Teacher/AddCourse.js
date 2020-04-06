import React, {useState} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import StepsContainer from "../../components/organisms/Course/StepsContainer";
import {ColumnWrapper} from "../../components/molecules/Wrappers/ColumnWrapper";
import Heading from "../../components/atoms/Headings/Heading";
import Input from "../../components/atoms/Input/Input";
import TextArea from "../../components/atoms/Textarea/Textarea";
import Button from "../../components/atoms/Button/Button";
import {Link} from "react-router-dom";
import {routes} from "../../routes";
import {InputWithButtons} from "../../components/molecules/InputWithButtons/InputWithButtons";
import {RowWrapper} from "../../components/molecules/Wrappers/RowWrapper";
import {INPUT_TYPES} from "../../utils/Types";

const HeaderPathInfoContainer = styled.div`
      display: flex;
      width: 100%;
      height: 9rem;
      flex-direction: column;
      justify-content: flex-end;
      color: ${({theme}) => theme.app_yellow};
      font-size: ${({theme}) => theme.fontSize.xxl};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
`;

const StyledSeparator = styled(HorizontalSeparator)`
      width: 80%;
      margin-top: 1.5rem;
`;

export const ContentWrapper = styled.div`
      display: flex;
      width: 100%;
      padding-top: 4rem;
      color: ${({theme}) => theme.app_blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
`;

const MainContentSection = styled.div`
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 100%;
`;

const SideContentSection = styled.div`
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;
      color: ${({theme}) => theme.app_blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
      padding: 2rem 3rem 0;
`;

const StepsSection = styled.section`
      display: flex;
      width: 100%;
      flex-wrap: wrap;
`;

const AddCourseFormSection = styled.section`
      display: flex;
      width: 100%;
      margin-top: 4rem;
`;

const StyledButton = styled(Button)`
    width: 16rem;
    min-height: 1rem;
    height: 4rem;
    margin: 2rem 0 0;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    background-color: ${({theme}) => theme.app_blue_light};
    justify-self: flex-end;
    align-self: flex-end;
`;

const AddCourse = () => {


    const [activeStep, setActiveStep] = useState(0);


    const generateFormByActiveStep = (step) => {
        switch (step) {
            case 0 :
                return (
                    <ColumnWrapper>
                        <Heading>Nazwa kursu</Heading>
                        <Input withShadow placeholder={'Wprowadź nazwę kursu...'} marginTop={'1rem'} width={'40rem'}/>
                        <Heading marginTop={'4rem'}>Opis kursu</Heading>
                        <TextArea placeholder={'Wprowadź opis kursu...'} width={'100%'}/>
                        <StyledButton onClick={() => setActiveStep(1)}>Następny krok {'>'}</StyledButton>
                    </ColumnWrapper>
                );
            case 1 :
                return (
                    <ColumnWrapper>
                        <Heading marginTop={'3rem'}>Egzamin</Heading>
                        <RowWrapper>
                            <InputWithButtons inputType={INPUT_TYPES.NUMBER}/>
                            <InputWithButtons inputType={INPUT_TYPES.WEIGHT}/>
                        </RowWrapper>
                        <Heading marginTop={'3rem'}>Ćwiczenia</Heading>
                        <RowWrapper>
                            <InputWithButtons inputType={INPUT_TYPES.NUMBER}/>
                            <InputWithButtons inputType={INPUT_TYPES.WEIGHT}/>
                        </RowWrapper>
                        <Heading marginTop={'3rem'}>Laboratorium</Heading>
                        <RowWrapper>
                            <InputWithButtons inputType={INPUT_TYPES.NUMBER}/>
                            <InputWithButtons inputType={INPUT_TYPES.WEIGHT}/>
                            <InputWithButtons inputType={INPUT_TYPES.PERSON_NUMBER} width={'13rem'} paddingLeft={'10rem'}/>
                        </RowWrapper>
                        <Heading marginTop={'3rem'}>Projekt</Heading>
                        <RowWrapper>
                            <InputWithButtons inputType={INPUT_TYPES.NUMBER}/>
                            <InputWithButtons inputType={INPUT_TYPES.WEIGHT}/>
                            <InputWithButtons inputType={INPUT_TYPES.PERSON_NUMBER} width={'13rem'} paddingLeft={'10rem'}/>
                        </RowWrapper>
                        <StyledButton onClick={() => setActiveStep(2)}>Następny krok {'>'}</StyledButton>
                    </ColumnWrapper>
                );
            case 2 :
                return (
                    <ColumnWrapper>
                        <Heading>Studenci</Heading>
                        <StyledButton onClick={() => console.log('save!')}>Zapisz kurs {'>'}</StyledButton>
                    </ColumnWrapper>
                )
        }
    };


    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Dodaj kurs
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                <MainContentSection>
                    <StepsSection>
                        <StepsContainer/>
                    </StepsSection>
                    <AddCourseFormSection>
                        {generateFormByActiveStep(activeStep)}
                    </AddCourseFormSection>
                </MainContentSection>
                <SideContentSection>
                    sdfsd
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default AddCourse;