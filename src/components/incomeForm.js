const IncomeForm = () => {
  return (
    <div className="mb-3">
      <div className="group-header">Add an income</div>
      <form>
        <div className="mb-3">
          <label for="income" className="form-label">
            Amount
          </label>
          <input type="text" id="income" className="form-control" />
        </div>
        <button type="button" className="btn btn-outline-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;
