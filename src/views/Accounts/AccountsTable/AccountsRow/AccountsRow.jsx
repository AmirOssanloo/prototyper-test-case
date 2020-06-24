import React from 'react';
import { Container } from './style';

const AccountsRow = ({ account }) => {
  
  return (
  <Container>
    <td>{account.id}</td>
    <td>{account.accountId}</td>
    <td>{account.bank}</td>
    <td>{account.balance}</td>
    <td>{account.currency}</td>
  </Container>
)};

export default AccountsRow;
