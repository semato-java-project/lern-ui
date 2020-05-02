import React, {useEffect, useState} from 'react';
import SidebarTemplate from "../../templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../components/atoms/Shapes/HorizontalSeparator";
import NewsSideContainer from "../../components/organisms/News/NewsSideContainer";
import AddCourseSideContainer from "../../components/organisms/Course/AddCourseSideContainer";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../../actions";
import {GET_PUBLICATIONS} from "../../api-config/requestTypes";
import {USER_ROLES} from "../../utils/userRoles";
import {RowWrapper} from "../../components/molecules/Wrappers/RowWrapper";
import Button from "../../components/atoms/Button/Button";
import {ColumnWrapper} from "../../components/molecules/Wrappers/ColumnWrapper";
import Heading from "../../components/atoms/Headings/Heading";
import Input from "../../components/atoms/Input/Input";
import TextArea from "../../components/atoms/Textarea/Textarea";
import PublicationContainer from "../../components/molecules/Containers/PublicationContainer";

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
    const publications = useSelector(state => state.publications || []);
    const currentUser = useSelector(state => state.currentUser);
    const [showAddForm, setShowAddForm] = useState(false);
    const [publicationToAdd,setPublicationToAdd ]= useState({title: '', description: ''});

    useEffect(() => {
        dispatch(fetchItems(GET_PUBLICATIONS))
    }, []);

    const isUserLecturer = () => currentUser.role === USER_ROLES.ROLE_LECTURER.API_NAME;

    // const saveNewsTrigger= () => {
    //     //TODO: change action type to addItem after API improvements
    //     dispatch(editItem(ADD_NEWS, newsToAdd))
    // };

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
                                value={publicationToAdd.title}
                                onChange={(e) => setPublicationToAdd({...publicationToAdd, title: e.target.value})}
                            />
                            <Heading marginTop={'4rem'}>Treśc</Heading>
                            <TextArea
                                placeholder={'Wprowadź opis ...'}
                                width={'100%'}
                                value={publicationToAdd.description}
                                onChange={(e) => setPublicationToAdd({...publicationToAdd, description: e.target.value})}

                            />
                            <RowWrapper justifyContent={'space-between'}>
                                <Button width={'16rem'} grayColor onClick={() => setShowAddForm(false)}>{'<'} Anuluj</Button>
                                <Button width={'16rem'} onClick={() => {
                                    // saveNewsTrigger();
                                    setShowAddForm(false);
                                }}>Zapisz {'>'}</Button>
                            </RowWrapper>
                        </ColumnWrapper>
                        :
                        <>
                            {publications.map(publication => <PublicationContainer key={publication.id} publication={publication}/>)}
                            {isUserLecturer() && <AddNewsContainer>
                                <RowWrapper justifyContent={'flex-end'}>
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