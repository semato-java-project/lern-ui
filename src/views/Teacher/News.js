import React, {useEffect, useState} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import NewsSideContainer from "../../components/organisms/News/NewsSideContainer";
import AddCourseSideContainer from "../../components/organisms/Course/AddCourseSideContainer";
import {useDispatch, useSelector} from "react-redux";
import {createItem, getList} from "../../actions";
import {ADD_NEWS, GET_NEWS} from "../../api-config/requestTypes";
import NewsContainer from "../../components/molecules/Containers/NewsContainer";
import {USER_ROLES} from "../../utils/userRoles";
import {RowWrapper} from "../../components/molecules/Wrappers/RowWrapper";
import Button from "../../components/atoms/Button/Button";
import {ColumnWrapper} from "../../components/molecules/Wrappers/ColumnWrapper";
import Heading from "../../components/atoms/Headings/Heading";
import Input from "../../components/atoms/Input/Input";
import TextArea from "../../components/atoms/Textarea/Textarea";

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


const AddNewsContainer = styled.div`
      display: flex;
      width: 100%;
      color: ${({theme}) => theme.app_blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
`;

const News = () => {

    const dispatch = useDispatch();
    const news = useSelector(state => state.news || []);
    const currentUser = useSelector(state => state.currentUser);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newsToAdd, setNewsToAdd] = useState({title: '', description: ''});

    useEffect(() => {
        dispatch(getList(GET_NEWS))
    }, [dispatch]);

    const isUserLecturer = () => currentUser.role === USER_ROLES.ROLE_LECTURER.API_NAME;

    const saveNewsTrigger = () => {
        dispatch(createItem(ADD_NEWS, newsToAdd))
            .then(() => dispatch(getList(GET_NEWS)))
            .then(() => setShowAddForm(false))
    };

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Aktualności
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                <MainContentSection>
                    {showAddForm ?
                        <ColumnWrapper>
                            <Heading>Tytuł</Heading>
                            <Input
                                withShadow
                                placeholder={'Wprowadź nazwę infotmacji...'}
                                marginTop={'1rem'}
                                width={'40rem'}
                                value={newsToAdd.title}
                                onChange={(e) => setNewsToAdd({...newsToAdd, title: e.target.value})}
                            />
                            <Heading marginTop={'4rem'}>Treśc</Heading>
                            <TextArea
                                placeholder={'Wprowadź opis ...'}
                                width={'100%'}
                                value={newsToAdd.description}
                                onChange={(e) => setNewsToAdd({...newsToAdd, description: e.target.value})}

                            />
                            <RowWrapper justifyContent={'space-between'}>
                                <Button width={'16rem'} grayColor
                                        onClick={() => setShowAddForm(false)}>{'<'} Anuluj</Button>
                                <Button width={'16rem'} onClick={() => {
                                    saveNewsTrigger();
                                }}>Zapisz {'>'}</Button>
                            </RowWrapper>
                        </ColumnWrapper>
                        :
                        <>
                            {news.map(news => <NewsContainer key={news.id} news={news}/>)}
                            {isUserLecturer() && <AddNewsContainer>
                                <RowWrapper justifyContent={'flex-end'} marginBottom={'5rem'}>
                                    <Button width={'16rem'} onClick={() => setShowAddForm(true)}>Dodaj {'>'}</Button>
                                </RowWrapper>
                            </AddNewsContainer>
                            }
                        </>
                    }
                </MainContentSection>
                <SideContentSection>
                    <AddCourseSideContainer/>
                    <NewsSideContainer/>
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default News;