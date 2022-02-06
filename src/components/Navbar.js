/* eslint-disable no-nested-ternary */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  useGetLoginUserInfoQuery,
  useLogoutUserMutation,
} from '../features/user/statusSlice';

const NavigationBar = () => {
  const { data, error, isLoading } = useGetLoginUserInfoQuery();
  const [logoutUser] = useLogoutUserMutation();

  const loggedIn = !!data?.logged_in;
  const isLoggedIn = data?.logged_in ? '/home' : '/login';

  const authLinks = (
    <Nav className="mr-auto">
      <Link to="/" className="text-light mx-2 logo">
        Expenses Tracker
      </Link>
      <Link to={isLoggedIn} className="text-light mt-2">
        Home
      </Link>
      <li className="logo-link">
        <a href="?" className="text-light mx-2" onClick={() => logoutUser()}>
          {' '}
          Logout
        </a>
      </li>
    </Nav>
  );

  const guessLinks = (
    <Nav className="mr-auto">
      <Link to="/" className="text-light mx-2 logo">
        Expenses Tracker
      </Link>
      <Link to={isLoggedIn} className="text-light mt-2">
        Home
      </Link>
      <Link to="/register" className="text-white mx-2 mt-2 ">
        Register
      </Link>
      <Link to="/login" className="text-light mt-2">
        Login
      </Link>
    </Nav>
  );

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">{loggedIn ? authLinks : guessLinks}</Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data.logged_in ? (
            <>
              <Navbar.Text>
                Hello:
                {data.user.name}
              </Navbar.Text>
            </>
          ) : (
            <Navbar.Text>Hello: Guess </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
