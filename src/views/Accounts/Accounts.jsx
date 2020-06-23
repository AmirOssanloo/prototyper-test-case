import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setAccounts } from '#store/ducks/app';
import { Container } from './style';

const Accounts = () => {
  const dispatch = useDispatch();
  const accounts = useSelector(({ app }) => app.accounts);

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await axios.get('https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK');

      if (response.status === 200) {
        const { data: accounts } = response;
        dispatch(setAccounts(accounts));
      }
    };

    if (!accounts.length) {
      fetchAccounts();
    }
  }, []);

  if (!accounts.length) {
    return (<h1>WOOOOOOOOOOAH</h1>);
  }

  return (
    <Container>
      <h1>Accounts</h1>
      {accounts.map(account => (
        <div key={`${account.id}-${account.accountId}`}>
          <span>{account.id}</span>
        </div>
      ))}
    </Container>
  );
};

export default Accounts;
