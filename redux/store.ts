import { configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from 'redux-persist';import { PersistedReducer } from './reducer'


const store = configureStore({
    reducer: PersistedReducer,
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})


export const persistorStore = persistStore(store);


export default store;