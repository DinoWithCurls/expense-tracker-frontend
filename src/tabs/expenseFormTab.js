import { IncomeForm, ExpenseForm } from '../components';

const ExpenseFormTab = () => {
    return (
        <div className="card group">
            <div className="card-body">
                <IncomeForm />
                <ExpenseForm />
            </div>
        </div>
    )
};

export default ExpenseFormTab;