import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  const [isShowingForm, setIsShowForm] = useState(false);

  const showtheForm = () => {
    setIsShowForm(true);
  };

  const stopShowingForm = () => {
    setIsShowForm(false);
  };
  return (
    <div className="new-expense">
      {isShowingForm && <ExpenseForm onCancel={stopShowingForm} />}
      {!isShowingForm && (
        <button type="button" onClick={showtheForm}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
