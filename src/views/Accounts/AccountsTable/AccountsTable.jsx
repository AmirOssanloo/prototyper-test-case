import React from 'react';
import { Container } from './style';

const AccountsTable = ({ children }) => {
  return (
    <Container>
      <thead>
        <tr>
          <td>ID</td>
          <td>Account ID</td>
          <td>Bank</td>
          <td>Balance</td>
          <td>Currency</td>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Container>
  );
};

export default AccountsTable;
