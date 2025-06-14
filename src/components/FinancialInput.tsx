import { addHistory } from '@/actions/actions';

const FinancialInput = () => {
  return (
    <form className="w-full mt-8 rounded overflow-hidden" action={addHistory}>
      <h4 className="text-center text-xl font-semibold capitalize py-3">
        Add Your Income or Expense
      </h4>
      <div className="flex gap-5 w-full">
        <div className="w-full">
          <label htmlFor="amount" className="block">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="w-full rounded-md  border-gray-600 bg-transparent focus:outline-none focus:border-gray-600 focus:ring-0 text-black placeholder:text-gray-500 mb-2"
          />
        </div>
        <div className="w-full">
          <label htmlFor="type" className="block">
            Type
          </label>
          <div className="flex gap-4 py-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="INCOME"
                defaultChecked
                className="accent-blue-600"
              />
              Income
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="EXPENSE"
                className="accent-red-600"
              />
              Expense
            </label>
          </div>
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
