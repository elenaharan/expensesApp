import React from 'react';
import './AddExpenseButton.css';

const AddExpenseButton = (props) => {
  const clickHandler =() => {
    props.clickedButton();
  };

  return (
      <div className='new-expense'>
        <button onClick={clickHandler} >Add New Expense</button>
      </div>
    )
};

export default AddExpenseButton;