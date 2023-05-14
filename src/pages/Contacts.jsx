import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/option';
import { Main, Message } from './Contacts.styled';
import { AuthNav } from '../components/AuthNav/AuthNav';

export function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Main>
      <AuthNav />
      <ContactForm />
      <Filter />
      {isLoading && <Message>Загрузка...</Message>}
      {error && <Message>{error}</Message>}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <Message>Здесь пока нет ни одного контакта...</Message>
      )}
    </Main>
  );
}
