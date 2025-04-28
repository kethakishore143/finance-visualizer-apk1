import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#ffbb28", "#8dd1e1", "#d0ed57"];

export default function CategoryPieChart({ transactions }) {
  const categoryData = transactions.reduce((acc, txn) => {
    acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
    return acc;
  }, {});

  const data = Object.entries(categoryData).map(([category, amount]) => ({ category, amount }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="category"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
