import FinancialDetails from '@/components/FinancialDetails';
import FinancialInput from '@/components/FinancialInput';

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-white">DashBoard</h1>
      <div className="w-full max-w-[600px] mx-auto">
        <FinancialDetails />
        <FinancialInput />
      </div>
    </div>
  );
};

export default page;
