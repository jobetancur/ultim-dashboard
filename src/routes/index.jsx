import { lazy } from 'react';
import Loadable from './Loadable';
import { AuthRoutes } from './auth';
import { PublicRoutes } from './public';
import { DashboardRoutes } from './dashboard';
import { ComponentRoutes } from './components';

// GLOBAL ERROR PAGE
const ErrorPage = Loadable(lazy(() => import('@/pages/404')));
// LANDING / INITIAL PAGE
const Landing = Loadable(lazy(() => import('@/pages/landing')));
// LOGIN / INITIAL PAGE
const LoginDemoWithFirebase = Loadable(lazy(() => import('@/pages/auth-demo/firebase/login')));

export const routes = () => {
  return [
  // INITIAL / INDEX PAGE
  {
    path: '/',
    element: <LoginDemoWithFirebase />
  },
  // GLOBAL ERROR PAGE
  {
    path: '*',
    element: <ErrorPage />
  },
  // AUTHENTICATION PAGES ROUTES & DIFFERENT AUTH DEMO PAGES ROUTES
  ...AuthRoutes,
  // COMPONENTS PAGES ROUTES
  ...ComponentRoutes,
  // INSIDE DASHBOARD PAGES ROUTES
  ...DashboardRoutes,
  // PAGES ROUTES
  ...PublicRoutes];
};