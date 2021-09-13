/* eslint-disable no-unused-expressions */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {
  useGetUserExpensesQuery,
  useGetLoginUserInfoQuery,
} from '../../features/user/statusSlice';

const BarChart = ({ filterYear }) => {
  const { data = [] } = useGetUserExpensesQuery();

  const { data: userdata } = useGetLoginUserInfoQuery();

  const filterIt = userdata?.logged_in
    ? data.filter((item) => item.user_id === userdata.user.id)
    : [];

  const filterItByUserId = filterIt.filter(
    (vaso) => new Date(vaso.date).toLocaleString('en-US', { year: 'numeric' })
      === filterYear,
  );

  const expensesPerMoth = () => {
    const expenses = {};

    filterItByUserId.forEach((item) => {
      const formatMonth = new Date(item.date).toLocaleString('en-US', {
        month: 'long',
      });

      expenses[formatMonth]
        ? (expenses[formatMonth] += item.amount)
        : (expenses[formatMonth] = item.amount);
    });
    return expenses;
  };

  const renderValues = () => {
    const barMonths = Object.keys(expensesPerMoth());
    const valuesMonths = Object.values(expensesPerMoth());
    return (
      <Bar
        data={{
          labels: barMonths,
          datasets: [
            {
              label: 'Total Expenses Per Month',
              data: valuesMonths,
              backgroundColor: [
                'yellow',
                'blue',
                'green',
                'brown',
                'orange',
                'red',
              ],
              maxBarThickness: 150,
            },
          ],
        }}
      />
    );
  };

  return <div>{renderValues()}</div>;
};

BarChart.propTypes = {
  filterYear: PropTypes.string.isRequired,
};

export default BarChart;
