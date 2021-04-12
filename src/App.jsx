import './scss/app.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Sidebar from './common/Sidebar';
import client from './gql/client';
import Dashboard from './dashboard';

const AppProviders =
({ children }) => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      { children }
    </BrowserRouter>
  </ApolloProvider>
);

const AppRoutes =
() => (
  <Switch>
    <Route exact path="/">
      <Sidebar />
      <Dashboard />
    </Route>
    <Route exact path="/squads">
      <Sidebar />
      <Dashboard />
    </Route>
    <Route exact path="/stats">
      <Sidebar />
      <Dashboard />
    </Route>
    <Route exact path="/login">
      <Sidebar />
      <Dashboard />
    </Route>
    <Route exact path="/submit">
      <Dashboard />
    </Route>
  </Switch>
);

const App =
() => (
  <AppProviders>
    <AppRoutes/>
  </AppProviders>
);

export default App;
