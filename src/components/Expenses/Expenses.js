import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem"
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from '../ExpensesFilter'
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020');

const filteredDateHandler = (selectedYear)=>{

  console.log("in expense.js");
  setfilteredYear(selectedYear);
  console.log(selectedYear);
}

    return(
        <Card className = 'expenses'>
          <div>
            <ExpensesFilter selected= {filteredYear} onFiltered = {filteredDateHandler}/>
            
            {props.items.map(expense => <ExpenseItem 
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />  
          )}
        </div>
    </Card>
    );
}

export default Expenses;