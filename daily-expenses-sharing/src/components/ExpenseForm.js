import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ onExpenseAdded }) => {
    const [description, setDescription] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [shares, setShares] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const expense = { description, totalAmount: parseFloat(totalAmount), shares: shares.split(',').map(Number) };
        try {
            const response = await axios.post('http://localhost:8080/expenses', expense);
            onExpenseAdded(response.data);
            setDescription('');
            setTotalAmount('');
            setShares('');
        } catch (error) {
            console.error("There was an error creating the expense!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Total Amount</label>
                <input
                    type="number"
                    className="form-control"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Shares (comma-separated)</label>
                <input
                    type="text"
                    className="form-control"
                    value={shares}
                    onChange={(e) => setShares(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
