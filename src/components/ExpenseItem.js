import './ExpenseItem.css';

const ExpenseItem =(props) => {
  const month = props.expenseDate.toLocaleString('en-UK', {month: 'long'});
  const year = props.expenseDate.getFullYear();
  const day = props.expenseDate.toLocaleString('en-UK', {day: '2-digit'});
  
  return(
  <div className='expense-item'>
    <div className='date'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
    
    <div className='expense-item__description'>
      <h2>{props.expenseTitle}</h2>
      <div className='expense-item__price'>£{props.expenseAmount}</div>
    </div>
  </div>
  )    
  
}

export default ExpenseItem;