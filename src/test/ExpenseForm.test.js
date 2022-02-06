import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import ExpenseForm from '../components/NewExpense/ExpenseForm';
import store from '../app/store';

describe('ExpenseForm Component', () => {
  test('renders Title', () => {
    render(
      <Provider store={store}>
        <ExpenseForm />
      </Provider>,
    );

    const title = screen.getByText('Title');
    expect(title).toBeInTheDocument();
  });

  test('renders Amount', () => {
    render(
      <Provider store={store}>
        <ExpenseForm />
      </Provider>,
    );

    const amount = screen.getByText('Amount');
    expect(amount).toBeInTheDocument();
  });

  test('renders Date', () => {
    render(
      <Provider store={store}>
        <ExpenseForm />
      </Provider>,
    );

    const date = screen.getByText('Date');
    expect(date).toBeInTheDocument();
  });
});
