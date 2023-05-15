// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';


// const PublicRoute = ({ children }) => {
//   const isAuth = useSelector(state => state.auth.isLoggedIn)
//   // console.log(isAuth)
//   return !isAuth ? children : <Navigate to="/" /> ;
// };

// export default PublicRoute;

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
