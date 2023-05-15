import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';

import {
  Label,
  RegBox,
  RegBtn,
  RegForm,
  RegInput,
  Title,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegBox>
      <Title>
        Sign Up
      </Title>
      <RegForm onSubmit={handleSubmit}>
        <Label>Name</Label>
        <RegInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Введите имя"
          required
          fullWidth
          autoComplete="name"
          autoFocus
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
        />
        <Label>Email Address</Label>
        <RegInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          fullWidth
          placeholder="Введите Email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          autoComplete="email"
        />
        <Label>Password</Label>
        <RegInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          fullWidth
          placeholder="Введите пароль"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          title="Пароль должен содержать как минимум 8 символов, включая хотя бы одну заглавную букву, одну строчную букву и одну цифру."
          autoComplete="current-password"
        />

        <RegBtn type="submit">Sign Up</RegBtn>
      </RegForm>
    </RegBox>
  );
};
