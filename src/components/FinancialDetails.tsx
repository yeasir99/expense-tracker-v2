'use client';
import { deleteExpense } from '@/actions/actions';

type ExpensesListProps = {
  histories: {
    id: string;
    description: string;
    amount: number;
    userId: string;
    type: 'INCOME' | 'EXPENSE';
    createdAt: Date;
  }[];
};

const FinancialDetails = ({ histories }: ExpensesListProps) => {
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {histories.map(history => (
        <li key={history.id} className="flex items-center px-4 py-2 border-b">
          <p>{history.description}</p>
          <p className="ml-auto font-bold mr-[15px]">${history.amount}</p>
          <button
            onClick={async () => {
              await deleteExpense(history.id);
            }}
            className="text-[10px] h-[20px] w-[20px] bg-red-500 text-white rounded hover:bg-red-600"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FinancialDetails;
