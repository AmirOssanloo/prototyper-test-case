import React from 'react';
import SidebarLink from './SidebarLink';
import { Container, Title } from './style';

const Sidebar = () => {
  return (
    <Container>
      <Title>Prototype Web Case</Title>
      <SidebarLink label="Home" />
      <SidebarLink label="Table" />
    </Container>
  );
};

export default Sidebar;
