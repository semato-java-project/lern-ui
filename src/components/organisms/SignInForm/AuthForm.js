import React from "react";
import styled, {css} from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import {routes} from "../../../routes";
import {useHistory} from "react-router-dom";
import {PersonIcon} from "../../atoms/Icons/PersonIcon";
import {useDispatch, useSelector} from "react-redux";
import {authenticate, getList} from "../../../actions";
import {USER_ROLES} from "../../../utils/userRoles";
import {ACTION_TYPES} from "../../../reducers/actionTypes";
import {GET_COURSES, GET_NEWS} from "../../../api-config/requestTypes";
import {useForm} from "react-hook-form";

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
       color: ${({theme}) => theme.colors_error};
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
  color: ${({theme}) => theme.colors_error};
  text-align: center;
`;

const StyledButton = styled(Button)`
    position: absolute;
    top: 100%;
`;

const FormWrapper = styled.form`
      display: flex;
      position: absolute;
      top: 30rem;
      transition: left .4s;
      left: calc(50% - 17.5rem);
   
      ${({hidden}) =>
    hidden === true &&
    css`
            left: 110%;
      `}
`;

const getRedirectPathByUserRole = (role) => {
    switch (role) {
        case USER_ROLES.ROLE_LECTURER.API_NAME:
            return routes.ROLE_LECTURER.DASHBOARD;
        case USER_ROLES.ROLE_STUDENT.API_NAME:
            return routes.ROLE_STUDENT.COURSES;
        default:
            return null;
    }
};

const AuthForm = ({hidden}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const authError = useSelector(state => state.authError);
    const {handleSubmit, register, errors} = useForm();

    const onSubmit = async ({username, password}) => {
        try {
            let role = await dispatch(authenticate(username, password));

            // smelly code -> move this request to teacher dashboard and add loader animation there!
            if (role === USER_ROLES.ROLE_LECTURER.API_NAME) {
                dispatch(getList(GET_COURSES));
            }

            dispatch(getList(GET_NEWS));
            history.replace(`${getRedirectPathByUserRole(role)}`);

        } catch (err) {
            dispatch({type: ACTION_TYPES.AUTHENTICATION_FAILURE});
        }
    };

    return (
        <FormWrapper hidden={hidden} onSubmit={handleSubmit(onSubmit)}>
            <PersonIcon/>
            <LoginForm>
                <InfoParagraph>Logowanie do systemu</InfoParagraph>
                <Input
                    width={'80%'}
                    name="username"
                    type="text"
                    placeholder="Email"
                    onFocus={() => dispatch({type: ACTION_TYPES.AUTHENTICATION_RESET})}
                    ref={register({
                        required: "Email jest wymagany!",
                    })}
                />
                {errors.username && <StyledErrorMsg>{errors.username.message}</StyledErrorMsg>}
                <Input
                    width={'80%'}
                    name="password"
                    type="password"
                    placeholder="Hasło"
                    onFocus={() => dispatch({type: ACTION_TYPES.AUTHENTICATION_RESET})}
                    ref={register({
                        required: "Hasło jest wymagane!",
                    })}
                />
                {errors.password && <StyledErrorMsg>{errors.password.message}</StyledErrorMsg>}
                <StyledButton type="submit" login>Zaloguj</StyledButton>
                {authError && <InfoParagraph badRequest>Podano nieprawidłowy login lub hasło.</InfoParagraph>}
            </LoginForm>
        </FormWrapper>
    )
};

export default AuthForm;