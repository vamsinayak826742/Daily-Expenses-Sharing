import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const ExpensePage = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await axios.get('http://localhost:8080/expenses');
            setExpenses(response.data);
        };
        fetchExpenses();
    }, []);

    const handleExpenseAdded = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    return (
        <div className="container mt-5">
            <h2>Expense Management</h2>
            <ExpenseForm onExpenseAdded={handleExpenseAdded} />
            <ExpenseList expenses={expenses} />
        </div>
    );
};

export default ExpensePage;
