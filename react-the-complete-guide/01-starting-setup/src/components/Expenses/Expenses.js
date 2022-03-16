import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
export default function Expenses({ expenses }) {
  const [pickedYear, setPickedYear] = useState("2020");

  const selectNewYearFilter = (selectedYear) => {
    console.log(selectedYear);
    setPickedYear(selectedYear);
  };
  const filteredExpense = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === pickedYear
  );
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={pickedYear}
        updatePickedYear={selectNewYearFilter}
      />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}
