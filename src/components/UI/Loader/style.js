import styled from 'styled-components';

export const Container = styled.span`
  animation: blink 0.12s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  @keyframes blink {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;
