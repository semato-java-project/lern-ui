import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: ${({theme}) => theme.app_blue_dark};
`;

export default Paragraph;
