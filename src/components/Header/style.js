import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  min-height: 8rem;
  padding: 1.4rem 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  margin-right: 4.5rem;
  padding-right: 3rem;
  border-right: 1px solid ${({ theme }) => theme.grey300};
`;
