import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    black: 'black',
    white: 'white',
    accent: 'tomato',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>
);
