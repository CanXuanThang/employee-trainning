import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';
import { CircularProgress } from '@mui/material';

const HomePage = lazy(() => import('./modules/auth/pages/home/Home'));
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'));
const ForgotPasswordPage = lazy(() => import('./modules/auth/pages/ForgotPasswordPage'));
const EmployeeManagement = lazy(() => import('./modules/auth/pages/employeeManagement/EmployeeManagement'));
const AddEmployee = lazy(
  () => import('./modules/auth/pages/employeeManagement/layouts/addEmployee/AddOrUpdateEmployee'),
);

interface Props {}

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      }
    >
      <Switch location={location}>
        <ProtectedRoute path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.login} component={LoginPage} />
        <Route path={ROUTES.forgotPassword} component={ForgotPasswordPage} />
        <Route path={ROUTES.update(':id')} component={AddEmployee} />
        <Route path={ROUTES.add} component={AddEmployee} />
        <Route path={ROUTES.employee} exact component={EmployeeManagement} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Suspense>
  );
};
