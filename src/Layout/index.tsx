import type { ReactNode } from 'react';

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center">
        <div className="w-full max-w-sm md:max-w-xl">{children}</div>
      </div>
    </>
  );
};

export default Layout;
