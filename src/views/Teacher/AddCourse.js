import React from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import StepsContainer from "../../components/organisms/Course/StepsContainer";

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

const AddCourse = () => {

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
                </MainContentSection>
                <SideContentSection>
                    sdfsd
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default AddCourse;