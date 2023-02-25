import React from 'react'
import { useAppContext } from '../context/AppContext'

const ExpenseTotal = () => {
    const {expenses} = useAppContext();
    const totalExpenses = expenses.reduce((total, item)  => total + item.cost, 0);

    return (
        <div className="alert alert-info">
            <span>ExpenseTotal: £{ totalExpenses}</span>
        </div>
    )

}

export default ExpenseTotal