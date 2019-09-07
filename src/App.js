import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './components/ui/GlobalStyle';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
