import React from "react";

import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './src/estilos/temas';

import PageRouter from "./src/router/PageRouter";

export default function App() {

  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content"/>
      <PageRouter />
    </NativeBaseProvider>
  );
}
