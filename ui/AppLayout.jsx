import React from 'react';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll dark:bg-stone-800">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
