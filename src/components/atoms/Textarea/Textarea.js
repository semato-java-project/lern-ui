import styled from 'styled-components';

const TextArea = styled.textarea`
  display: flex;
  margin-top: ${({marginTop}) => marginTop || '1.5rem'};
  height: ${({height}) => height || '30rem'};
  padding: 15px 30px;
  font-size: ${({theme}) => theme.fontSize.l};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  background-color: ${({theme}) => theme.colors.background_white};
  border: none;
  border-radius: 10px;
  width: ${({width}) => width || '100%'};
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.06), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  resize: none;

  ::placeholder {
    color: ${({theme}) => theme.colors.text_gray};
 }
 &:focus{
      outline: none;
  }
`;

export default TextArea;