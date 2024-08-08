import { Navigate } from 'react-router-dom';
// CUSTOM DEFINED HOOK
import useAuth from '@/hooks/useAuth';
import useLocation from '@/hooks/useLocation';
export default function AuthGuard({
  children
}) {
  const {
    pathname
  } = useLocation();
  const {
    isAuthenticated
  } = useAuth();
  if (isAuthenticated) return <>{children}</>;
  return <Navigate replace to="/firebase/login" state={{
    from: pathname
  }} />;
}