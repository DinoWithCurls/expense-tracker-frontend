import { ExpenseDetailsTab, ExpenseGraphTab, ExpenseFormTab } from "../tabs";
import { TopBar } from "../components";

const DashboardScreen = () => {
  return (
    <div className="body">
      <TopBar />
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

export default DashboardScreen;
