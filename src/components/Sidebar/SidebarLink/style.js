import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.grey600};
  font-size: 1.4rem;
  font-weight: 400;

  &:not(:last-child) {
    margin-right: 4.5rem;
  }
`;
