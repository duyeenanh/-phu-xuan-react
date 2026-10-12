import type { RouteObject } from "react-router";
import { Navigate } from "react-router";

import RootLayout from "../components/layout/RootLayout";
import HomePage from "../pages/HomePage";
import AttractionDetailPage from "../pages/AttractionDetailPage";
import CheckoutPage from "../pages/CheckoutPage";
import MyBookingsPage from "../pages/MyBookingsPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/attractions/:id",
        element: <AttractionDetailPage />,
      },
      {
        path: "/attractions",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/my-bookings",
        element: <MyBookingsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
];