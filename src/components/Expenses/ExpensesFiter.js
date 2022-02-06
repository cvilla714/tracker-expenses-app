import React from 'react';
import './ExpenseFilter.css';
import PropTypes from 'prop-types';

const ExpensesFiter = ({ selected, onChangeFitler }) => {
  const handleClick = (e) => {
    onChangeFitler(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor={selected}>
          Filter by year
          <br />
          <select value={selected} onChange={handleClick}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </div>
    </div>
  );
};

ExpensesFiter.propTypes = {
  onChangeFitler: PropTypes.func.isRequired,
  selected: PropTypes.elementType.isRequired,
};

export default ExpensesFiter;
