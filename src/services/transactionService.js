import axios from "axios";

const API_URL = "http://localhost:5000/api/transactions";

export const fetchTransactions = () => axios.get(API_URL);
export const addTransaction = (transaction) => axios.post(API_URL, transaction);
export const deleteTransaction = (id) => axios.delete(`${API_URL}/${id}`);
