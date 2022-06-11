import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
const [selectedYear, setSelectedYear] = useState('2022');
const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === selectedYear;
});

let expensesContent = <p>No expenses found</p>;
if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
  <ExpenseItem key={expense.id} 
  title={expense.title} 
  date={expense.date} 
  amount={expense.amount} 
  />
  ))
}




  const selectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  
return(
  <div>
    <Card className='expenses'>
    <ExpenseFilter selected={selectedYear} onSelectedYear={selectedYearHandler} />
    {expensesContent}
    </Card>
  </div>
)
}

export default Expenses;