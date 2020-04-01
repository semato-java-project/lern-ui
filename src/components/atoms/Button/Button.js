import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  margin-top: 4rem;
  background-color: ${({theme}) => theme.app_blue_dark};
  width: ${({width}) => width || '220px'};
  min-height: 47px;
  border: none;
  border-radius: 3rem;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  font-size: ${({theme}) => theme.fontSize.s};
  color: ${({theme}) => theme.app_background};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1), 0 10px 20px 0 rgba(0, 0, 0, 0.06);
  :disabled{
    display: none;
  }
 
  transition: background-position .3s;
  background-position: 0;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${({theme}) => theme.app_yellow} 50%);
  background-size: 220%;
          &:hover{
            color: ${({theme}) => theme.app_blue_dark};
            background-position: 100%;
          }
  }
          
  &:focus{
      outline: none;
  }
`;

export default Button;