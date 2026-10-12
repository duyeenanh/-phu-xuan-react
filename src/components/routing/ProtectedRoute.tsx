import { Navigate, Outlet, useLocation } from "react-router";

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectTo?: string;
}

export default function ProtectedRoute({
  isAllowed,
  redirectTo = "/admin/login",
}: ProtectedRouteProps) {
  const location = useLocation();

  if (!isAllowed) {
    return (
      <Navigate
        to={redirectTo}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}
