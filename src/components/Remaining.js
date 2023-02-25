
import React from 'react'
import { useAppContext } from '../context/AppContext';

const Remaining = () => {
    const {expenses, budget} = useAppContext();

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost
    }, 0)

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'

    return (
        <div className={`alert ${alertType}`}
         >
             <span>Remaining: £{budget - totalExpenses}</span>
         </div>
    )
}

export default Remaining;
