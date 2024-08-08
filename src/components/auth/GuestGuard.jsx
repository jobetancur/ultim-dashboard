import { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// CUSTOM DEFINED HOOK
import useAuth from '@/hooks/useAuth';
import useLocation from '@/hooks/useLocation';
export default function GuestGuard({
  children
}) {
  const {
    state
  } = useLocation();
  const {
    isAuthenticated
  } = useAuth();
  if (isAuthenticated) {
    if (state?.from) return <Navigate to={state.from} />;
    return <Navigate to="/dashboard" />;
  }
  return <Fragment>{children || <Outlet />}</Fragment>;
}