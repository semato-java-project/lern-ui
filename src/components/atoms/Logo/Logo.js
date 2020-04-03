import styled from "styled-components";
import logo from "../../../assets/learn_logo_white.svg";


const Logo = styled.div`
   background-image: url(${logo});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   height: 7rem;
   width: 18rem;
   position: fixed;
   left: 5rem;
   top: 5rem;
   z-index: 99;
`;


export default Logo;