import AppHeader from '@/components/AppHeader';
import BackgroundPattern from '@/components/BackgroundPattern';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col gap-y-10 max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        {children}
      </div>
    </>
  );
};

export default layout;
