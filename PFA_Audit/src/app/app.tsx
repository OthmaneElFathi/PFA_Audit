// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
    <Routes>
        <Route path="/"></Route>
      </Routes>
      <NxWelcome title="pfa-audit" />
      <div />
    </>
  );
}

export default App;
