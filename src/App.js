import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ IndexPage }/>
    </Switch>
  </Router>
);
export default App;
