import React, {useEffect} from "react";

import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './src/estilos/temas';

import PageRouter from "./src/router/PageRouter";

import GlobalState from "./src/context/GlobalStateContext";

import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  SplashScreen.hideAsync();
  
  return (
    <GlobalState>
      <NativeBaseProvider theme={TEMAS}>
        <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
        <PageRouter />
      </NativeBaseProvider>
    </GlobalState>
  );
}
