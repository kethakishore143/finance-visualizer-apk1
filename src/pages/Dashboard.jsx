import { useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import MonthlyExpensesChart from "../components/MonthlyExpensesChart";
import CategoryPieChart from "../components/CategoryPieChart";
import SummaryCards from "../components/SummaryCards";

import '../index.css';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (txn) => setTransactions([...transactions, txn]);
  const deleteTransaction = (idx) => setTransactions(transactions.filter((_, i) => i !== idx));

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      
      <h1 className="text-2xl md:text-3xl font-bold text-center">Personal Finance Dashboard</h1>

      
      <SummaryCards transactions={transactions} />


      <div className="bg-white p-6 rounded-xl shadow-md">
        <TransactionForm onAddTransaction={addTransaction} />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <MonthlyExpensesChart transactions={transactions} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <CategoryPieChart transactions={transactions} />
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
}
