import { type FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './Layout.module.scss';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const Layout: FC = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
        <div className={classes['page-wrapper']}>
          <Sidebar />
          <main>
            <Outlet />
          </main>
        </div>
        <footer>Footer 2024</footer>
      </Suspense>
    </>
  );
};

export default Layout;
