import React from 'react';
import HeaderLink from './HeaderLink';
import { Container, Title } from './style';

const Header = () => {
  return (
    <Container>
      <Title>Prototype Web Case</Title>
      <HeaderLink to="/" label="Home" selected />
      <HeaderLink to="/accounts" label="Accounts" />
    </Container>
  );
};

export default Header;
