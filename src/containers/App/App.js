import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialised(true);
    }, 1000);
  }, []);

  if (!initialised) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
};

export default App;
