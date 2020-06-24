import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;

  & thead {
    & tr {
      background-color: ${({ theme }) => theme.grey300};
      font-weight: 500;
    }

    & td {
      padding: 1.2rem 2rem;
    }
  }

  & tbody {
    & tr {
      &:nth-child(odd) {
        background-color: ${({ theme }) => theme.grey200};
      }
    }

    & td {
      padding: 0.8rem 2rem;
    }
  }
`;
