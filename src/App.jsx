import './scss/app.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard';

const AppProviders =
({ children }) => (
  <BrowserRouter>
    { children }
  </BrowserRouter>
);

const AppRoutes =
() => (
  <Route exact path="/">
    <Dashboard />
  </Route>
);

const App =
() => (
  <AppProviders>
    <AppRoutes/>
  </AppProviders>
);

export default App;
