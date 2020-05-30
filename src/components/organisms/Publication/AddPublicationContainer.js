import React from "react";
import styled, {css} from "styled-components";
import Heading from "../../atoms/Headings/Heading";
import {AddPublicationImage} from "../../molecules/Images/AddPublicationImage";
import Button from "../../atoms/Buttons/Button";
import {Link} from "react-router-dom";
import {routes} from "../../../utils/routes";

const StyledButton = styled(Button)`
    margin: 3rem;
    width: 18rem;
    height: 4rem;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    background-color: ${({theme}) => theme.colors.yellow};
    color: ${({theme}) => theme.colors.blue_dark};
    
    &:hover{
      background-color: ${({theme}) => theme.colors.blue_dark};
      }
`;

const AddPublicationWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      position:relative;
      align-items: center;
      
      ${({animate}) =>
    animate === true &&
    css`
      @keyframes slide-right-to-left {
        0%   {left: 30%;opacity: 0;}
        100% {left: 0; opacity: 100%;}
      }
      animation: slide-right-to-left 1s ease-in-out;   
    `}
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
      top: 5.5rem;
      left: 33%;
      font-size: 1.5rem;
      color: ${({theme}) => theme.colors.blue_light};
      span{
        font-weight: ${({theme}) => theme.fontWeight.bold};
      }
     
      
      @media only screen and (min-width: 1441px) {
             top: 7.5rem;
             font-size: 2.2rem;
             left: 40%;
      }

`;


const AddPublicationContainer = ({animate}) => {

    return (
        <AddPublicationWrapper animate={animate}>
            <AddPublicationImageWrapper>
                <AddPublicationImage/>
            </AddPublicationImageWrapper>
            <AddPublicationTitle>
                Nie zapomnij<span>dodać publikacji!</span>
            </AddPublicationTitle>
            <AddPublicationTextWrapper>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </AddPublicationTextWrapper>
            <StyledButton as={Link} to={routes.ROLE_LECTURER.PUBLICATIONS}>Dodaj publikację{'>'}</StyledButton>
        </AddPublicationWrapper>
    )
};

export default AddPublicationContainer;
