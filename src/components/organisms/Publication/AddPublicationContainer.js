import React from "react";
import styled from "styled-components";
import Heading from "../../atoms/Headings/Heading";
import {AddPublicationImage} from "../../molecules/Images/AddPublicationImage";
import Button from "../../atoms/Button/Button";
import {Link} from "react-router-dom";
import {routes} from "../../../routes";

const StyledButton = styled(Button)`
    margin: 3rem;
    width: 18rem;
    min-height: 1rem;
    height: 4rem;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    background-color: ${({theme}) => theme.app_yellow};
    color: ${({theme}) => theme.app_blue_dark};
    
    &:hover{
      background-color: ${({theme}) => theme.app_blue_dark};
      }
`;

const AddPublicationWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 30%;
      position:relative;
      align-items: center;
`;

const AddPublicationImageWrapper = styled.div`
      display: flex;
      width: 60%;
      margin-left: -12rem;
`;

const AddPublicationTextWrapper = styled.div`
      display: flex;
      width: 70%;
      align-content: center;
      text-align: center;
`;
const AddPublicationTitle = styled(Heading)`
      display:flex;
      flex-direction: column;
      position:absolute;
      top: 7.5rem;
      left: 40%;
      font-size: 2.2rem;
      color: ${({theme}) => theme.app_blue_light};
      span{
        font-weight: ${({theme}) => theme.fontWeight.bold};
      }
`;


const AddPublicationContainer = () => {

    return (
        <AddPublicationWrapper>
            <AddPublicationImageWrapper>
                <AddPublicationImage/>
            </AddPublicationImageWrapper>
            <AddPublicationTitle>
                Nie zapomnij<span>dodać publikacji!</span>
            </AddPublicationTitle>
            <AddPublicationTextWrapper>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AddPublicationTextWrapper>
            <StyledButton as={Link} to={routes.TEACHER_PUBLICATIONS}>Dodaj publikację{'>'}</StyledButton>
        </AddPublicationWrapper>
    )
};

export default AddPublicationContainer;
