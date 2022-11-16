import React, { useState } from 'react';
import Styles from './App.styles';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Login } from './components/login';
import store, { persistorStore as persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingMarkup } from './components/loading-markup';
import { Provider } from 'react-redux';
import { Chat } from './components/chat/chat.component';

export default function App() {
  const [isChat, setIsChat] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        <SafeAreaView style={Styles.container}>
          {!isChat ? <Login onPush={() => setIsChat(true)} /> : <Chat />}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
