import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

const HeaderLink = ({
  to,
  label
}) => {
  return (
    <Container>
      <Link to={to}>{label}</Link>
    </Container>
  );
};

export default HeaderLink;
