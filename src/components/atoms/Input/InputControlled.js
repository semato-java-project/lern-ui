import styled, {css} from 'styled-components';

const InputControlled = styled.input`
      display: flex;
      margin-top: ${({marginTop}) => marginTop || '0'};
      height: ${({height}) => height || '4rem'};
      padding: 15px ${({paddingRight}) => paddingRight || '1rem'} 15px ${({paddingLeft}) => paddingLeft || '6rem'};
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      background-color: ${({theme}) => theme.app_gray_light};
      border: none;
      border-radius: 10px;
      width: ${({width}) => width || '10rem'};
      
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
      }
      &[type=number] {
      -moz-appearance: textfield;
      }


      ::placeholder {
        color: ${({theme}) => theme.app_text_gray};
      }
      &:focus{
         outline: none;
      }
  
    ${({withShadow}) =>
    withShadow &&
    css`
         box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.06), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
               background-color: ${({theme}) => theme.app_background};
      `}
`;

export default InputControlled;