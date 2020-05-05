import styled from 'styled-components'

const Heading = styled.h1`
      font-size: ${({theme, fontSize}) => fontSize ? fontSize : theme.fontSize.xl};
      font-weight: ${({theme, fontWeight}) => fontWeight ? fontWeight : theme.fontWeight.semiBold};
      color: ${({theme, color}) => color ? color : theme.app_blue_dark};
      margin: ${({marginTop}) => marginTop || 0} 0 0;
      margin-left: ${({marginLeft}) => marginLeft || 0};
      margin-bottom: ${({marginBottom}) => marginBottom || 0};
  
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
`;

export default Heading;