const ExpenseForm = () => {
  return (
    <div>
      <div className="group-header">Add an expense</div>
        <form>
          <div className="mb-3">
            <label for="date" className="form-label">
              Date
            </label>
            <input type="date" className="form-control" id="date" />
          </div>
          <div className="mb-3">
            <label for="expenseType" className="form-label">
              Location
            </label>
            <select className="form-select" aria-label="Location" id="expense">
              <option selected>Choose an option</option>
              <option value="1">Uber</option>
              <option value="2">Grocery Stores</option>
              <option value="3">Food</option>
              <option value="4">Water Can</option>
              <option value="5">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="other" className="form-label">
              Specify(if other)
            </label>
            <input type="text" className="form-control" id="other" />
          </div>
          <div className="mb-3">
            <label for="date" className="form-label">
              Date
            </label>
            <input type="date" className="form-control" id="date" />
          </div>
          <button type="button" className="btn btn-outline-primary">
            SUBMIT
          </button>
        </form>
    </div>
  );
};

export default ExpenseForm;
