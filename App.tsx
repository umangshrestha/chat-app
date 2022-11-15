import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Login } from './components/Login';
import Styles from './App.styles';
import React, { useState } from 'react';
import store, { persistorStore as persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingMarkup } from './components/LoadingMarkup';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/types';

const ChatApp = () => {
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();

  return (<>
    <Login />
    <StatusBar style="auto" />
  </>)
}


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        <SafeAreaView style={Styles.container}>
          <ChatApp />
        </SafeAreaView>
      </PersistGate>
    </Provider>

  );
}
