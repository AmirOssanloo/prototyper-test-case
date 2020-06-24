import React from 'react';
import { Container } from './style';
import { useDispatch } from 'react-redux';
import { sortAccountsBy } from '#store/ducks/app';

const AccountsTable = ({ children }) => {
  const dispatch = useDispatch();

  const onSortAccounts = prop => {
    event.preventDefault()
    dispatch(sortAccountsBy(prop));
  };

  return (
    <Container>
      <thead>
        <tr>
          <td onClick={() => onSortAccounts('id')}>ID</td>
          <td onClick={() => onSortAccounts('accountId')}>Account ID</td>
          <td onClick={() => onSortAccounts('bank')}>Bank</td>
          <td onClick={() => onSortAccounts('balance')}>Balance</td>
          <td onClick={() => onSortAccounts('currency')}>Currency</td>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Container>
  );
};

export default AccountsTable;
