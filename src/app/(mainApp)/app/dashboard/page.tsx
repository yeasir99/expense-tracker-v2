import FinancialDetails from '@/components/FinancialDetails';
import FinancialInput from '@/components/FinancialInput';
import { prisma } from '@/liv/db';

const page = async () => {
  const histories = await prisma.history.findMany();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-white">DashBoard</h1>
      <div className="w-full max-w-[600px] mx-auto">
        <FinancialDetails histories={histories} />
        <FinancialInput />
      </div>
    </div>
  );
};

export default page;
