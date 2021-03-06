import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

const [selectedYear, setSelectedYear] = useState('2022');

const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === selectedYear;
});

const selectedYearHandler = (selectedYear) => {
  setSelectedYear(selectedYear);
};
  
return(
  <div>
    <Card className='expenses'>
    <ExpenseFilter selected={selectedYear} onSelectedYear={selectedYearHandler} />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items={filteredExpenses} />
    </Card>
  </div>
)
}

export default Expenses;