export default function TransactionList({ transactions, onDelete }) {
    return (
      <div className="p-4">
        {transactions.map((txn, idx) => (
          <div key={idx} className="flex justify-between p-2 border-b">
            <div>
              <div className="font-bold">₹{txn.amount}</div>
              <div>{txn.description} | {new Date(txn.date).toLocaleDateString()}</div>
            </div>
            <button onClick={() => onDelete(idx)} className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    );
  }
  