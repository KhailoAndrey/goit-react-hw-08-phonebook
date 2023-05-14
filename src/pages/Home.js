import {
  HomeTitle,
  WrapperHomePage,
  HomePage,
  Wrapper,
} from './HomePage.styled';
import { useAuth } from 'redux/auth/selectors';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <HomePage >
      <WrapperHomePage>
        <Wrapper>
          {isLoggedIn ? (
            <HomeTitle>
              Go to the "Contacts" tab to see the list of contacts
            </HomeTitle>
          ) : (
            <HomeTitle style={{ color: 'green' }}>
              To access the list of contacts, you must log in with your
              credentials or register
            </HomeTitle>
          )}
        </Wrapper>
      </WrapperHomePage>
    </HomePage>
  );
}