import React from 'react';
import './ExpenseForm.css';
import PropTypes from 'prop-types';
import {
  usePostUserExpensesMutation,
  useGetLoginUserInfoQuery,
} from '../../features/user/statusSlice';

import useForm from '../Hooks/useForm';

const ExpenseForm = ({ onCancel }) => {
  const { form, handleChange, clearForm } = useForm({
    title: '',
    amount: '',
    date: '',
  });

  const [postUserExpenses] = usePostUserExpensesMutation();
  const { data: userid } = useGetLoginUserInfoQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      user_id: userid.user.id,
      title: form.title,
      amount: form.amount,
      date: new Date(form.date).toLocaleDateString(),
    };

    postUserExpenses(expenseData);
    clearForm();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">
            Amount
            <input
              type="number"
              min="0.01"
              step="0.01"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">
            Date
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};
export default ExpenseForm;
