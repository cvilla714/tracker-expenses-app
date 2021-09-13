import React, { useState } from 'react';
import Expenses from './Expenses';
import NewExpense from '../NewExpense/NewExpense';
import { useGetUserExpensesQuery } from '../../features/user/statusSlice';

const Home = () => {
  const { data = [] } = useGetUserExpensesQuery();
  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Home;
