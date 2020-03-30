import styled, {css} from 'styled-components';

const Input = styled.input`
      display: flex;
      margin-top: ${({marginTop}) => marginTop || '2.5rem'};
      height: ${({height}) => height || '4rem'};
      padding: 15px 30px;
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      background-color: ${({theme}) => theme.app_gray_light};
      border: none;
      border-radius: 10px;
      width: ${({width}) => width || '32rem'};

      ::placeholder {
        letter-spacing: 1px;
        color: ${({theme}) => theme.app_text_gray};
      }
      &:focus{
         outline: none;
      }
  
    ${({reservationDate}) =>
    reservationDate &&
    css`
        width: 100%;
        height: 3.5rem;
        border-radius: 8px;
        margin-top: 0;
        padding: 10px 20px;
      `}
`;


export default Input;