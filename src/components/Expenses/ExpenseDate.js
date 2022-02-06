import React from 'react';
import './ExpenseDate.css';
import PropTypes from 'prop-types';

const ExpenseDate = ({ date }) => {
  const month = new Date(date).toLocaleString('en-US', { month: 'long' });
  const day = new Date(date).toLocaleString('en-US', { day: '2-digit' });
  const year = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
  });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

ExpenseDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ExpenseDate;
