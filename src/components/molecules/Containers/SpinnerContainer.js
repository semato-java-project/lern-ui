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
      border-radius: 50%;
      background-color: ${({theme}) => theme.app_text_gray};
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;

      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
     
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
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
      background-color: ${({theme}) => theme.app_gray_light};
`;

export const SpinnerContainer = () => (
    <Wrapper>
        <Spinner>
            <DoubleBounce1/>
            <DoubleBounce2/>
        </Spinner>
    </Wrapper>
);
