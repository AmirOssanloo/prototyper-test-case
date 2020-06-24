import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import Button from '#components/UI/Button';
import Loader from '#components/UI/Loader';
import { setAccounts } from '#store/ducks/app';
import AccountsTable from './AccountsTable';
import AccountsRow from './AccountsTable/AccountsRow';
import { Container } from './style';

const Accounts = () => {
  const [fetching, setFetching] = useState(false);
  const dispatch = useDispatch();
  const accounts = useSelector(({ app }) => app.accounts);

  const fetchAccounts = async (e) => {
    setFetching(true);
    const response = await axios.get('https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK');

    if (response.status === 200) {
      const { data: accounts } = response;

      // Mock delay
      setTimeout(() => {
        dispatch(setAccounts(accounts));
        setFetching(false);
      }, 500);
    }
  };

  const renderInstructions = () => (
    <React.Fragment>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed nisl blandit, rutrum nisi eu, condimentum eros. Phasellus porttitor leo vitae risus feugiat, sed luctus turpis sollicitudin.</p>
      <Button onClick={fetchAccounts}>
        Fetch Accounts
      </Button>
      {fetching && <Loader />}
    </React.Fragment>
  );

  const renderAccounts = () => (
    <AccountsTable>
      {accounts.map(account => {
        return <AccountsRow key={`AccountRow-${account.id}`} account={account} />
      })}
    </AccountsTable>
  );

  return (
    <Container>
      <h1>Accounts</h1>
      {!accounts.length ? renderInstructions() : renderAccounts()}
    </Container>
  );
};

export default Accounts;
