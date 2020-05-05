import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      min-height: 50%;
`;

const Spinner = styled.div`
      width: 8rem;
      height: 8rem;
      position: relative;
      margin: 12rem auto;
`;


const DoubleBounce1 = styled.div`
      width: 100%;
      height: 100%;
      background-color: ${({theme}) => theme.app_gray};
      border-radius: 50%;
      opacity: 0.4;
      position: absolute;
      top: 0;
      left: 0;

      -webkit-animation: sk-bounce 1.5s infinite ease-in-out;
      animation: sk-bounce 1.5s infinite ease-in-out;
     
      @-webkit-keyframes sk-bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
      }
 
      @keyframes sk-bounce {
         0%, 100% {
         transform: scale(0.0);
          -webkit-transform: scale(0.0);
          } 50% {
         transform: scale(1.0);
          -webkit-transform: scale(1.0);
       }
      }
`;

const DoubleBounce2 = styled(DoubleBounce1)`
      -webkit-animation-delay: -0.75s;
      animation-delay: -0.75s;
`;

export const SpinnerContainer = () => (
    <Wrapper>
        <Spinner>
            <DoubleBounce1/>
            <DoubleBounce2/>
        </Spinner>
    </Wrapper>
);
