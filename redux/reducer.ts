import { persistReducer } from 'redux-persist'
import { persistConfig } from './config';
import { combineReducers } from 'redux';
import UserReducer from './slice/user.slice';
import ServerReducer from './slice/server.slice';

const rootReducer = combineReducers({
    user: UserReducer,
    server: ServerReducer,
})

export const PersistedReducer = persistReducer(persistConfig, rootReducer);

