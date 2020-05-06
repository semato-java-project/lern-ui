import React from "react";
import styled, {css} from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import {ErrorMessage, Form, Formik} from 'formik';
import {routes} from "../../../routes";
import {useHistory} from "react-router-dom";
import {PersonIcon} from "../../atoms/Icons/PersonIcon";
import {useDispatch, useSelector} from "react-redux";
import {authenticate, getList} from "../../../actions";
import {USER_ROLES} from "../../../utils/userRoles";
import {ACTION_TYPES} from "../../../reducers/actionTypes";
import {GET_NEWS} from "../../../api-config/requestTypes";

const InfoParagraph = styled.h1`
   margin-bottom: 5rem;
   margin-top: 5rem;
   text-align: center;
   font-size: small;
   color: #7E828B;
   font-weight: ${({theme}) => theme.fontWeight.regular};
   text-decoration: none;
   
    ${({badRequest}) =>
    badRequest &&
    css`
       margin-bottom: 0;
       margin-top: 2rem;
       color: #DE242B;
    `}
`;

const LoginForm = styled.div`
   display: flex;
   flex-direction: column;
   height: 35rem;
   width: 35rem;
   background-color: white; 
   border-radius: 20px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
   align-items: center;
   z-index: 1;
`;

const StyledErrorMsg = styled.div`
  margin: 10px 0 0;
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.s};
  color: #DE242B;
  text-align: center;
`;


const StyledButton = styled(Button)`
    position: absolute;
    top: 100%;
    // TODO: HANDLE SLIDE ANIMAITON
`;


const FormWrapper = styled(Form)`
    display: flex;
    position: absolute;
    top: 30rem;
    transition: left .4s;
    left: calc(50% - 17.5rem);

   
   ${({isHidden}) =>
    isHidden === true &&
    css`
    left: 100%;
     `}
`;

const SignInForm = ({isHidden}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const authError = useSelector(state => state.authError);

    const getRedirectPath = (role) => {
        switch (role) {
            case USER_ROLES.ROLE_LECTURER.API_NAME:
                return routes.ROLE_LECTURER.DASHBOARD;
            case USER_ROLES.ROLE_STUDENT.API_NAME:
                return routes.ROLE_STUDENT.COURSES;
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validate={values => {
                    const errors = {};

                    if (!values.username) {
                        errors.username = 'Email jest wymagany)';
                    }

                    if (!values.password) {
                        errors.password = 'Hasło jest wymagane';
                    }

                    return errors;
                }}
                onSubmit={values => {
                    dispatch(authenticate(values.username, values.password))
                        .then(role => {
                            dispatch(getList(GET_NEWS));
                            history.replace(`${getRedirectPath(role)}`)
                        })
                        .catch(err => {
                            console.log(err);
                            dispatch({type: ACTION_TYPES.AUTHENTICATION_FAILURE})
                        })
                }}
            >
                {({values, handleChange, handleBlur}) => {
                    return (
                        <FormWrapper isHidden={isHidden}>
                            <PersonIcon/>
                            <LoginForm>
                                <InfoParagraph>Logowanie do systemu</InfoParagraph>
                                <Input
                                    width={'80%'}
                                    name="username"
                                    type="text"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onFocus={() => dispatch({type: ACTION_TYPES.AUTHENTICATION_RESET})}
                                    value={values.username}
                                />
                                <ErrorMessage name="username" component={StyledErrorMsg}/>
                                <Input
                                    width={'80%'}
                                    name="password"
                                    type="password"
                                    placeholder="Hasło"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onFocus={() => dispatch({type: ACTION_TYPES.AUTHENTICATION_RESET})}
                                    value={values.password}
                                />
                                <ErrorMessage name="password" component={StyledErrorMsg}/>
                                <StyledButton type="submit" login>Zaloguj</StyledButton>
                                {authError &&
                                <InfoParagraph badRequest>Podano nieprawidłowy login lub hasło.</InfoParagraph>}
                            </LoginForm>
                        </FormWrapper>
                    );
                }}
            </Formik>
        </>
    )
};

export default SignInForm;