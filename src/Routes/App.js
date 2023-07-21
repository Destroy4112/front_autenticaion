import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../Models/routes';
import AuthGuard from '../Guards/authGuards';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import ReserGuard from '../Guards/reserGuard';

const Login = lazy(() => import('../Pages/Login'));
const Registrarse = lazy(() => import('../Pages/Registrarse'));
const Recuperar = lazy(() => import('../Pages/Recuperar'));
const Reestablecer = lazy(() => import('../Pages/Reestablecer'));
const Dashboard = lazy(() => import('../Pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.REGISTER} element={<Registrarse />} />
            <Route path={PublicRoutes.SEARCH} element={<Recuperar />} />
            <Route element={<ReserGuard />}>
              <Route path={PublicRoutes.RESET} element={<Reestablecer />} />
            </Route>
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
            <Route path="*" element={<>Not Found</>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
