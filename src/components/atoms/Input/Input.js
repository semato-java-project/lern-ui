import styled, {css} from 'styled-components';

const Input = styled.input`
      display: flex;
      margin-top: ${({marginTop}) => marginTop || '2.5rem'};
      height: ${({height}) => height || '4rem'};
      padding: 15px ${({paddingRight}) => paddingRight || '30px'} 15px ${({paddingLeft}) => paddingLeft || '30px'};
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      background-color: ${({theme}) => theme.colors.gray_light};
      border: none;
      border-radius: 10px;
      width: ${({width}) => width || '32rem'};

      ::placeholder {
        color: ${({theme}) => theme.colors.text_gray};
      }
      &:focus{
         outline: none;
      }
  
    ${({withShadow}) =>
    withShadow &&
    css`
         box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.06), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
               background-color: ${({theme}) => theme.colors.background_white};
      `}
`;

export default Input;