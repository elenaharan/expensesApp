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
      <ExpenseItem date={props.items[0].date} title={props.items[0].title} amount={props.items[0].amount} />
      <ExpenseItem date={props.items[1].date} title={props.items[1].title} amount={props.items[1].amount} />
      <ExpenseItem date={props.items[2].date} title={props.items[2].title} amount={props.items[2].amount} />
      <ExpenseItem date={props.items[3].date} title={props.items[3].title} amount={props.items[3].amount} />
    </Card>
  </div>
)
}

export default Expenses;