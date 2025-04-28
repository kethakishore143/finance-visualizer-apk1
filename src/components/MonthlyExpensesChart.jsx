import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function MonthlyExpensesChart({ transactions }) {
  const monthlyData = transactions.reduce((acc, txn) => {
    const month = new Date(txn.date).toLocaleString('default', { month: 'short', year: 'numeric' });
    acc[month] = (acc[month] || 0) + txn.amount;
    return acc;
  }, {});

  const data = Object.entries(monthlyData).map(([month, amount]) => ({ month, amount }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
