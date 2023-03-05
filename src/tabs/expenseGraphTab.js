/* eslint-disable react/style-prop-object */
import ExpenseGraph from "../components/expenseGraph";

const ExpenseGraphTab = () => {
  const dataTypes = ["Uber", "Grocery Stores", "Food", "Water Can", "Others"];
  const colors = ["#05BBD2", "#2070C4", "#EB80F1", "#F5C842", "#37D400"];
  const data = [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 12 }
  ]
  return (
    <div className="card group">
      <div className="card-body">
        <div className="group-header">Expense Graph</div>
        
        <ExpenseGraph dataTypes={dataTypes} colors={colors} values={data} />
        <div>
          <div>Legend</div>
          <div className="d-flex flex-col"><div className="legend uber"></div>&nbsp;- Uber</div>
          <div className="d-flex flex-col"><div className="legend grocery"></div>&nbsp;- Grocery Stores</div>
          <div className="d-flex flex-col"><div className="legend food"></div>&nbsp;- Food</div>
          <div className="d-flex flex-col"><div className="legend water"></div>&nbsp;- Water Can</div>
          <div className="d-flex flex-col"><div className="legend other"></div>&nbsp;- Others</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseGraphTab;
