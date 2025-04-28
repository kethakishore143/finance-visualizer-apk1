export default function SummaryCards({ transactions }) {
    const totalExpenses = transactions.reduce((sum, txn) => sum + txn.amount, 0);
    const recentTxns = [...transactions].slice(-3).reverse();
  
    let topCategory = "N/A";
    if (transactions.length > 0) {
      const categoryTotals = transactions.reduce((totals, txn) => {
        totals[txn.category] = (totals[txn.category] || 0) + txn.amount;
        return totals;
      }, {});
      const sortedCategories = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);
      topCategory = sortedCategories[0]?.[0] || "N/A";
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold">Total Expenses</h2>
          <p className="text-xl text-blue-500">₹{totalExpenses.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold">Recent Transactions</h2>
          <ul className="text-sm">
            {recentTxns.map((txn, idx) => (
              <li key={idx}>{txn.description} - ₹{txn.amount}</li>
            ))}
          </ul>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold">Top Category</h2>
          <p>{topCategory}</p>
        </div>
      </div>
    );
  }
  