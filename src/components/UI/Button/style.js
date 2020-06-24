import styled from 'styled-components';
import { tint } from '#style/helpers';

export const Container = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  min-height: 46px;
  margin-bottom: 2rem;
  padding: 1.4rem;
  font-size: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => tint(theme.primary, 5)};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 600px) {
    width: auto;
  }
`;
