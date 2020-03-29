import React, {useState} from 'react';
import styled, {css} from 'styled-components'
import MainTemplate from "../templates/MainTemplate";
import Logo from "../components/atoms/Logo/Logo";
import Button from "../components/atoms/Button/Button";
import {HomeBackgroundShape} from "../components/atoms/Shapes/HomeBackgroundShape";
import MainHomeImage from "../components/molecules/Images/MainHomeImage";
import {RightTopYellowShape} from "../components/atoms/Shapes/RightTopYellowShape";
import {RightTopSoftShape} from "../components/atoms/Shapes/RightTopSoftShape";
import laptop from "../assets/learn_laptop.png";
import {HomeInfoContainer} from "../components/molecules/Containers/HomeInfoContainer";
import {LeftBottomSoftShape} from "../components/atoms/Shapes/LeftBottomSoftShape";
import {RightBottomSoftShape} from "../components/atoms/Shapes/RightBottomSoftShape";
import SignInForm from "../components/organisms/SignInForm/SignInForm";

const ContentWrapper = styled.div`
      display: flex;
      margin-top: 10rem;
      width: 100%;
      height: 10vh;
      align-items: center;
      flex-direction: column;
`;

const Laptop = styled.div`
      display: flex;
      position: absolute;
      width: 55rem;
      height: 45rem;
      left: calc(50% - 27.5rem);
      top: 23%;
      background-image: url(${laptop});
      background-size: contain;
      background-repeat: no-repeat;
      transition: left .4s;
      
      ${({isHidden}) =>
    isHidden &&
    css`
          left: -55rem;
      `}
`;

function HomePage() {

    const [showAuthForm, setShowAuthForm] = useState(false);


    return (
        <MainTemplate>
            {console.log(showAuthForm)}
            <HomeBackgroundShape/>
            <Logo/>
            <MainHomeImage>
                <Laptop isHidden={showAuthForm}/>
                <SignInForm isHidden={!showAuthForm}/>
            </MainHomeImage>
            <RightTopSoftShape/>
            <RightTopYellowShape/>
            <LeftBottomSoftShape/>
            <RightBottomSoftShape/>
            <ContentWrapper>
                {!showAuthForm && <HomeInfoContainer/>}
                {!showAuthForm && <Button onClick={() => setShowAuthForm(true)}>Przejdź do systemu {'>'}</Button>}
            </ContentWrapper>
        </MainTemplate>
    );
}

export default HomePage;
