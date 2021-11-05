import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/app.css';
import Asidebar from './components/SideBar';

// assaid
function App() {
  return (
    <Router>

      <Asidebar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
