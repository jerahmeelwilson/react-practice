import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [pickedYear, setPickedYear] = useState("2020");

  const selectNewYearFilter = (selectedYear) => {
    console.log(selectedYear);
    setPickedYear(selectedYear);
  }

  return (
      <Card className="expenses">
      <ExpensesFilter selected={pickedYear} updatePickedYear ={selectNewYearFilter} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
  );
}
