import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '#components/Header';
import HomeView from '#views/Home';
import AccountsView from '#views/Accounts';
import { Container, Main } from './style';

const App = () => {
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialised(true);
    }, 250);
  }, []);

  if (!initialised) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/accounts" component={AccountsView} />
          <Route render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </Main>
    </Container>
  );
};

export default App;
