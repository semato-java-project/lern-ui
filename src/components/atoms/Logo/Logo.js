import styled from "styled-components";
import logo from "../../../assets/learn_logo_white.svg";


const Logo = styled.div`
   background-image: url(${logo});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   height: 7rem;
   width: 18rem;
   position: absolute;
   left: 5rem;
   top: 5rem;
   z-index: 10;
`;


export default Logo;