import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  height: 8rem;
  padding: 1.4rem 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};

  @media screen and (min-width: 600px) {
    padding: 4rem 6rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0;
  margin-right: 4.5rem;
  padding-bottom: 0;
  padding-right: 3rem;
  font-size: 1.6rem;
  font-weight: 700;
  border-bottom: none;
  border-right: 1px solid ${({ theme }) => theme.grey300};

  &::before {
    content: 'PWC';
  }

  @media screen and (min-width: 600px) {
    &::before {
    content: 'Prototype Web Case';
  }
  }
`;
