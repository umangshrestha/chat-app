import AsyncStorage from '@react-native-async-storage/async-storage';

export const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
};
