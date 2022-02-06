import React, { useState } from 'react';
import './Expenses.css';
import ReactPaginate from 'react-paginate';
import Card from '../Ui/Card';
import ExpensesFiter from './ExpensesFiter';
import BarChart from '../Chart/BarChart';
import {
  useGetUserExpensesQuery,
  useGetLoginUserInfoQuery,
} from '../../features/user/statusSlice';
import ExpenseItem from './ExpenseItem';

const Expenses = () => {
  const { data = [] } = useGetUserExpensesQuery();

  const { data: userdata } = useGetLoginUserInfoQuery();
  const [filterYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };

  const filterByUserid = userdata?.logged_in
    ? data.filter((item) => item.user_id === userdata.user.id)
    : [];

  const filterExpensesByUserId = filterByUserid.filter(
    (month) => new Date(month.date).toLocaleString('en-US', { year: 'numeric' })
      === filterYear,
  );

  const [pageNumber, setPageNumber] = useState(0);

  const expensesPerPage = 3;
  const pagesVisited = pageNumber * expensesPerPage;

  let expensesContent = <h2 className="text-warning">No Expenes Found</h2>;

  if (filterExpensesByUserId.length > 0) {
    expensesContent = filterExpensesByUserId
      .slice(pagesVisited, pagesVisited + expensesPerPage)
      .map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id={expense.id}
        />
      ));
  }

  const pageCount = Math.ceil(filterExpensesByUserId.length / expensesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFiter
          selected={filterYear}
          onChangeFitler={filterChangeHandler}
        />
        <BarChart filterYear={filterYear} />
        {expensesContent}
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBttns"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          activeClassName="paginationActive"
        />
      </Card>
    </div>
  );
};

export default Expenses;
