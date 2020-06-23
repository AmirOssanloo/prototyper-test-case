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

export const Paper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 24rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
