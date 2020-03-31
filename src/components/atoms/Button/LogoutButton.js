import styled from 'styled-components';

const LogoutButton = styled.button`
  padding: 0;
  background-color: ${({theme}) => theme.app_gray};
  width: ${({width}) => width || '16rem'};
  margin-left: 7rem;
  height: 3.5rem;
  border: none;
  border-radius: 3rem;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  font-size: ${({theme}) => theme.fontSize.s};
  color: ${({theme}) => theme.app_blue_dark};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.08), 0 7px 15px 0 rgba(0, 0, 0, 0.06);
 
  transition: background-position .2s;
  background-position: 0;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${({theme}) => theme.app_blue_dark} 50%);
  background-size: 220%;
          &:hover{
            color: ${({theme}) => theme.app_background};
            background-position: 100%;
          }
  }
         
  &:focus{
      outline: none;
  }
`;

export default LogoutButton;