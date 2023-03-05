import { TransactionDetail, CurrentBalance } from "../components";
const ExpenseDetailsTab = () => {
  return (
    <div className="card group">
      <div className="card-body">
        <div className="mb-3">
          <div className="group-header">Current Balance</div>
          <CurrentBalance />
        </div>
        <div className="group-header">Expense Details</div>
        <div className="container border border-secondary border-2 rounded transaction-body">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Amount(in Rs)</th>
              </tr>
            </thead>
            <tbody>
              <TransactionDetail type={"expense"} />
              <TransactionDetail type={"income"} />
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default ExpenseDetailsTab;
