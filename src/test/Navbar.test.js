import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import NavigationBar from '../components/Navbar';
import store from '../app/store';

describe('<NavigationBar />', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <NavigationBar />
        </MemoryRouter>
      </Provider>,
    );
  });

  test('It should render', () => {
    component.getByText('Expenses Tracker');
  });

  test('It should  have a link to Home', () => {
    component.getByText('Home');
  });

  test('It should  have a link to Login', () => {
    component.getByText('Login');
  });
});
