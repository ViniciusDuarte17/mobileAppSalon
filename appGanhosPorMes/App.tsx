import React from "react";

import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './src/estilos/temas';

import PageRouter from "./src/router/PageRouter";
import GlobalState from "./src/context/GlobalStateContext";

export default function App() {

  return (
    <GlobalState>
      <NativeBaseProvider theme={TEMAS}>
        <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
        <PageRouter />
      </NativeBaseProvider>
    </GlobalState>
  );
}
