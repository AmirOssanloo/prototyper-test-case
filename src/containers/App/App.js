import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '#components/Header';
import Home from '#views/Home';
import Accounts from '#views/Accounts';
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
          <Route exact path="/" component={Home} />
          <Route exact path="/accounts" component={Accounts} />
          <Route render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </Main>
    </Container>
  );
};

export default App;
