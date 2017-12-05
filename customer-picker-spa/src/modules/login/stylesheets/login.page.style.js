import styled, { css } from 'styled-components';
import Paper from 'material-ui/Paper';

export const PaperStyled = styled(Paper)`
  width: 400px;
  margin: 0 auto;
  textAlign: 'center';
  padding: 20px;
  flex: 1;
  justify-content: center;
  align-items: 'center';
  @media (max-width: 700px) {
    width: 100%;
  }
  
`;


