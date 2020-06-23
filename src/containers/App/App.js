import React, { useEffect, useState } from 'react';
import Sidebar from '#components/Sidebar';
import { Container } from './style';

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
      <Sidebar />
    </Container>
  );
};

export default App;
