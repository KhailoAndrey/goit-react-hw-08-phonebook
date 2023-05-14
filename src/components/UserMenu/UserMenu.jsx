import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/auth/selectors';
import { BtnLogOut, StyledName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <StyledName>Welcome, {user.name}</StyledName>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </BtnLogOut>
    </div>
  );
};
