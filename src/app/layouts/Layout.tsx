import type { FC } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/widgets/PageLoader';

import classes from './Layout.module.scss';

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
      <div style={{ display: 'flex', flexFlow: 'row' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <div className="p-orange-100">100</div>
          <div className="p-orange-200">200</div>
          <div className="p-orange-300">300</div>
          <div className="p-orange-400">400</div>
          <div className="p-orange-500">500</div>
          <div className="p-orange-600">600</div>
          <div className="p-orange-700">700</div>
          <div className="p-orange-800">800</div>
          <div className="p-orange-900">900</div>
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <div className="p-yellow-100">100</div>
          <div className="p-yellow-200">200</div>
          <div className="p-yellow-300">300</div>
          <div className="p-yellow-400">400</div>
          <div className="p-yellow-500">500</div>
          <div className="p-yellow-600">600</div>
          <div className="p-yellow-700">700</div>
          <div className="p-yellow-800">800</div>
          <div className="p-yellow-900">900</div>
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <div className="p-green-100">100</div>
          <div className="p-green-200">200</div>
          <div className="p-green-300">300</div>
          <div className="p-green-400">400</div>
          <div className="p-green-500">500</div>
          <div className="p-green-600">600</div>
          <div className="p-green-700">700</div>
          <div className="p-green-800">800</div>
          <div className="p-green-900">900</div>
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <div className="p-blue-100">100</div>
          <div className="p-blue-200">200</div>
          <div className="p-blue-300">300</div>
          <div className="p-blue-400">400</div>
          <div className="p-blue-500">500</div>
          <div className="p-blue-600">600</div>
          <div className="p-blue-700">700</div>
          <div className="p-blue-800">800</div>
          <div className="p-blue-900">900</div>
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <div className="p-pink-100">100</div>
          <div className="p-pink-200">200</div>
          <div className="p-pink-300">300</div>
          <div className="p-pink-400">400</div>
          <div className="p-pink-500">500</div>
          <div className="p-pink-600">600</div>
          <div className="p-pink-700">700</div>
          <div className="p-pink-800">800</div>
          <div className="p-pink-900">900</div>
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <div className="p-gray-100">100</div>
          <div className="p-gray-200">200</div>
          <div className="p-gray-300">300</div>
          <div className="p-gray-400">400</div>
          <div className="p-gray-500">500</div>
          <div className="p-gray-600">600</div>
          <div className="p-gray-700">700</div>
          <div className="p-gray-800">800</div>
          <div className="p-gray-900">900</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
