import styled from "styled-components";
import logo from "../../../assets/images/learn_logo_white.svg";


const Logo = styled.div`
   background-image: url(${logo});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   height: 7rem;
   width: 10%;
   position: fixed;
   left: 2.5%;
   top: 5rem;
   z-index: 99;
`;


export default Logo;