import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <div className="mt-4">
            <h4>Expense List</h4>
            <ul className="list-group">
                {expenses.map(expense => (
                    <li key={expense.id} className="list-group-item">
                        {expense.description} - Total: {expense.totalAmount} - Shares: {expense.shares.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
