import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import {
  Label,
  LoginBox,
  LoginBtn,
  LoginInput,
  Title,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { email, password } = state;

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
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginBox>
      <Title>Log In</Title>
      <LoginForm component="form" onSubmit={handleSubmit}>
        <Label>Email Address</Label>
        <LoginInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          fullWidth
          autoFocus
          autoComplete="email"
          placeholder="Введите Email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        />
        <Label>Password</Label>
        <LoginInput
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
          fullWidth
          placeholder="Введите пароль"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          title="Пароль должен содержать как минимум 8 символов, включая хотя бы одну заглавную букву, одну строчную букву и одну цифру."
          autoComplete="current-password"
        />

        <LoginBtn
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            color: '#0f1111',
            background: '#87CEFA	',
          }}
        >
          Log In
        </LoginBtn>
      </LoginForm>
    </LoginBox>
  );
};
