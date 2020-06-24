import styled from 'styled-components';
import { Grid as MuiGrid } from '@material-ui/core';

export const Container = styled.div`

`;

export const Grid = styled(MuiGrid)`
  flex-direction: column-reverse;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme, branded }) => branded ? theme.primary : theme.grey300};
  width: 100%;
  height: 100%;
  min-height: 24rem;
  padding: 3rem 2rem;
  color: ${({ theme, branded }) => branded ? theme.white : theme.grey800};
`;
