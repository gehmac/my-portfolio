import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import HeaderPage from './components/Header';

function App() {
  return (
    <Router>
      <HeaderPage />
      <Switch>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
