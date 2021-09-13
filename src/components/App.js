import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Navbar';
import Home from './Expenses/Home';

import Registration from '../containers/auth/Registration';
import Login from '../containers/auth/Login';
import { useGetLoginUserInfoQuery } from '../features/user/statusSlice';

const App = () => {
  const { data } = useGetLoginUserInfoQuery();
  const isAuth = !!data?.logged_in;
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          {isAuth ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/login" component={Login} />
          )}
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
