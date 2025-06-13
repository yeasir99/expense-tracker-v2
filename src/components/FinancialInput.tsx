const FinancialInput = () => {
  return (
    <form className="w-full mt-8 rounded overflow-hidden ">
      <h4 className="text-center text-xl font-semibold capitalize py-3">
        Add Your Income or Expense
      </h4>
      <div className="flex gap-5 w-full">
        <div className="w-full">
          <label htmlFor="income" className="block">
            Income
          </label>
          <input
            type="number"
            name="income"
            id="income"
            className="w-full rounded-md  border-gray-600 bg-transparent focus:outline-none focus:border-gray-600 focus:ring-0 text-black placeholder:text-gray-500 mb-2"
          />
        </div>
        <div className="w-full">
          <label htmlFor="expense" className="block">
            Expense
          </label>
          <input
            type="number"
            name="expense"
            id="expense"
            className="w-full rounded-md  border-gray-600 bg-transparent focus:outline-none focus:border-gray-600 focus:ring-0 text-black placeholder:text-gray-500 mb-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="w-full rounded-md  border-gray-600 bg-transparent focus:outline-none focus:border-gray-600 focus:ring-0 text-black placeholder:text-gray-500 mb-2"
        />
      </div>
      <button className="text-xl font-semibold bg-blue-500 w-full text-white p-2">
        Add Record
      </button>
    </form>
  );
};

export default FinancialInput;
