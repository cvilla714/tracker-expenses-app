import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewExpense from '../components/NewExpense/NewExpense';

describe('NewExpense Component', () => {
  test('renders Add New Expense', () => {
    render(<NewExpense />);

    const expense = screen.getByText('Add New Expense');
    expect(expense).toBeInTheDocument();
  });
});
