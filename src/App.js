import { ExpenseDetailsTab, ExpenseGraphTab, ExpenseFormTab } from "./tabs";

function App() {
  return (
    <div className="body">
      <div className="container-xl">
        <div className="row">
        <div className="col-lg-4">
            <ExpenseFormTab />
          </div>
          <div className="col-lg-4">
            <ExpenseGraphTab />
          </div>
          <div className="col-lg-4">
          <ExpenseDetailsTab />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
