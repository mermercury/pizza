import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as MenuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order, { loader as OrderLoader } from './features/order/Order';
import CreateOrder, {action as CreateOrderAction} from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
      },
    ]
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
