import logo from './logo.svg';
import './style.css';
import Home from './components/Home';
import Signin from './components/SignIn';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
    
  );
}

export default App;
