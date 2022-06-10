import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
const [selectedYear, setSelectedYear] = useState('2022');

  const selectedYearHandler = (selectedYear) => {
    console.log('In Expenses');
    setSelectedYear(selectedYear);
  };
  
return(
  <div>
    <Card className='expenses'>
    <ExpenseFilter selected={selectedYear} onSelectedYear={selectedYearHandler} />
      {props.items.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />)}
    </Card>
  </div>
)
}

export default Expenses;