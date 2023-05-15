// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';

// export const PrivateRoute = ({ children }) => {
//   const isAuth = useSelector(state => state.auth.isLoggedIn)

//   return isAuth ? children : <Navigate to="/login" /> ;
// };

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};