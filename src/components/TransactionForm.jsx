import { useState } from "react";
import { categories } from "../constants/categories";

export default function TransactionForm({ onAddTransaction }) {
  const [form, setForm] = useState({ amount: "", description: "", date: "", category: categories[0] });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.description || !form.date || !form.category) {
      return alert("All fields are required");
    }
    onAddTransaction({ ...form, amount: parseFloat(form.amount) });
    setForm({ amount: "", description: "", date: "", category: categories[0] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <input type="number" placeholder="Amount" className="input" value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <input type="text" placeholder="Description" className="input" value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input type="date" className="input" value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <select className="input" value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit" className="btn">Add Transaction</button>
    </form>
  );
}
