import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './AddContactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'auth'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),

});

export const store = configureStore({
  reducer: rootReducer,  
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);