import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import { useGetUserExpensesQuery } from '../../features/user/statusSlice';

const ExpensesList = () => {
  const { data = [] } = useGetUserExpensesQuery();

  if (data.length === 0) {
    return <h2 className="text-warning">No Expenes Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {data.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
