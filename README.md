# Personal Finance Visualizer

A web application designed to help users track and visualize their personal finances.

## Features

### Stage 1: Basic Transaction Tracking

- **Transaction Management**: Add, edit, and delete transactions including amount, date, and description.
- **Transaction List**: View a list of all transactions.
- **Visualization**: Display a bar chart of monthly expenses.
- **Form Validation**: Ensure data integrity with basic form validation.

### Stage 2: Categories

- **Categorization**: Assign predefined categories to transactions.
- **Visualization**: View a pie chart representing expenses by category.
- **Dashboard**: Access summary cards displaying total expenses, category breakdown, and recent transactions.

### Stage 3: Budgeting

- **Budget Setup**: Set monthly budgets for each category.
- **Comparison**: Compare actual spending against the set budget.
- **Insights**: Gain simple spending insights to manage finances better.

## Tech Stack

- **Frontend**: React, Recharts, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/finance-visualizer-apk.git
cd finance-visualizer
```

# Navigate to the backend directory:

cd backend

# Install dependencies:

npm install

# Set up environment variables in a .env file:

MONGODB_URI=your_mongodb_connection_string
PORT=5000

# Start the server:

nodemon server.js

# # Frontend Setup

cd ../finance-visualization-apk

# Install dependencies:

npm install

# Start the development server:

npm start

Open your browser and go to http://localhost:3000/finance-visualizer-apk to view the application.

📊 Visualizations
Monthly Expenses Bar Chart: Displays total expenses per month.

Category-wise Pie Chart: Shows the distribution of expenses across different categories.

Budget vs Actual Comparison: Compares the planned budget with actual spending.
