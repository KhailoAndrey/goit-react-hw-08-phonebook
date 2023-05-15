import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.isLoggedIn)
  
  return isAuth ? children : <Navigate to="/" /> ;
};

export default PublicRoute;