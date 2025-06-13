import { prisma } from '@/liv/db';

const FinancialDetails = async () => {
  const histories = await prisma.history.findMany();
  console.log(histories);
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      <li></li>
    </ul>
  );
};

export default FinancialDetails;
