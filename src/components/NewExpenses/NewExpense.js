import React, { useState } from 'react';
import AddExpenseButton from './AddExpenseButton';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [clicked, setClicked] = useState(false);
  const clickHandler =() => {
    setClicked(true);
  };

  const clickDisappearHandler = () => {
    setClicked(false);
  };

  if (clicked === false) {
    return <AddExpenseButton clickedButton={clickHandler} />
  }

  return (
  <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onClickDisappear={clickDisappearHandler} />
  </div>
  )
};

export default NewExpense;