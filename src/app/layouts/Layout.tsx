import { type FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './Layout.module.scss';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/widgets/PageLoader';

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <div className={classes['page-wrapper']}>
        <Sidebar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <footer>Footer 2024</footer>
    </>
  );
};

export default Layout;
