import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  width: 100%;
  padding: 3rem;

  @media screen and (min-width: 600px) {
    max-width: 96rem;
  }
`;
