
import React from 'react'
import {useAppContext} from '../context/AppContext'

const Budget = () => {
    const {budget} = useAppContext()

    return (
        <div className="alert alert-secondary">
            <span>Budget: £{budget}</span>
        </div>
    )
}

export default Budget;