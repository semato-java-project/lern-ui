import React, {useEffect, useState} from 'react';
import SidebarTemplate from "../../appUIConfig/templates/SidebarTemplate";
import styled from "styled-components";
import {HorizontalSeparator} from "../../atoms/Shapes/HorizontalSeparator";
import NewsSideContainer from "../../organisms/News/NewsSideContainer";
import AddCourseSideContainer from "../../organisms/Course/AddCourseSideContainer";
import {useDispatch, useSelector} from "react-redux";
import {createItem, getList, requestTypes} from "../../../services/httpService";
import {USER_ROLES} from "../../../utils/types";
import {RowWrapper} from "../../molecules/Wrappers/RowWrapper";
import Button from "../../atoms/Buttons/Button";
import {ColumnWrapper} from "../../molecules/Wrappers/ColumnWrapper";
import Heading from "../../atoms/Headings/Heading";
import Input from "../../atoms/Inputs/Input";
import TextArea from "../../atoms/Textareas/Textarea";
import PublicationContainer from "../../molecules/Containers/PublicationContainer";
import {ACTION_TYPES} from "../../../store/reducers/actionTypes";
import {SpinnerContainer} from "../../molecules/Containers/SpinnerContainer";

const HeaderPathInfoContainer = styled.div`
      display: flex;
      width: 100%;
      height: 9rem;
      flex-direction: column;
      justify-content: flex-end;
      color: ${({theme}) => theme.colors.yellow};
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
      color: ${({theme}) => theme.colors.blue_dark};
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
      color: ${({theme}) => theme.colors.blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
      padding: 2rem 3rem 0;
`;


const AddNewsContainer = styled.div`
      display: flex;
      width: 100%;
      color: ${({theme}) => theme.colors.blue_dark};
      font-size: ${({theme}) => theme.fontSize.l};
`;

const Publications = () => {

    const dispatch = useDispatch();
    const publications = useSelector(state => state.publications || []);
    const currentUser = useSelector(state => state.currentUser);
    const [showAddForm, setShowAddForm] = useState(false);
    const [publicationToAdd, setPublicationToAdd] = useState({title: '', description: ''});

    useEffect(() => {
        dispatch(getList(requestTypes.GET_PUBLICATIONS));
        // --- CLEANUP ---
        return () => dispatch({type: ACTION_TYPES.DATA_CLEANUP, payload: requestTypes.GET_PUBLICATIONS.itemType})
    }, [dispatch]);

    const isUserLecturer = () => currentUser.role === USER_ROLES.ROLE_LECTURER.API_NAME;

    const savePublicationsTrigger = () => {
        dispatch(createItem(requestTypes.ADD_PUBLICATION, publicationToAdd))
            .then(() => dispatch(getList(requestTypes.GET_PUBLICATIONS)))
            .then(() => setShowAddForm(false))
    };

    return (
        <SidebarTemplate>
            <HeaderPathInfoContainer>
                Publikacje
                <StyledSeparator/>
            </HeaderPathInfoContainer>
            <ContentWrapper>
                {publications.length? <MainContentSection>
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
                                onChange={(e) => setPublicationToAdd({
                                    ...publicationToAdd,
                                    description: e.target.value
                                })}

                            />
                            <RowWrapper justifyContent={'space-between'}>
                                <Button width={'16rem'} grayColor
                                        onClick={() => setShowAddForm(false)}>{'<'} Anuluj</Button>
                                <Button width={'16rem'} onClick={() => {
                                    savePublicationsTrigger();
                                }}>Zapisz {'>'}</Button>
                            </RowWrapper>
                        </ColumnWrapper>
                        :
                        <>
                            {publications.map(publication =>
                                    <PublicationContainer key={publication.id} publication={publication}/>)}
                            {isUserLecturer() && <AddNewsContainer>
                                <RowWrapper justifyContent={'flex-end'} marginBottom={'5rem'}>
                                    <Button width={'16rem'} onClick={() => setShowAddForm(true)}>Dodaj {'>'}</Button>
                                </RowWrapper>
                            </AddNewsContainer>
                            }
                        </>
                    }
                </MainContentSection> : <SpinnerContainer/>}
                <SideContentSection>
                    <AddCourseSideContainer/>
                    <NewsSideContainer/>
                </SideContentSection>
            </ContentWrapper>
        </SidebarTemplate>
    );
};

export default Publications;