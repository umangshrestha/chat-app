import {persistReducer } from 'redux-persist'
import { persistConfig } from './config';
import {combineReducers} from 'redux';
import UserReducer  from './slice';


const rootReducer = combineReducers({
    user: UserReducer
})

export const PersistedReducer = persistReducer(persistConfig, rootReducer);

