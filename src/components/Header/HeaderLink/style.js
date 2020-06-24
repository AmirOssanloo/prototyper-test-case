import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.4rem;
  font-weight: 400;

  & a {
    color: ${({ theme }) => theme.grey700};
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
