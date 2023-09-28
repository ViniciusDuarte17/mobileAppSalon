import React from "react";
import {  Center, Divider, VStack} from "native-base"
import { Header } from "../../componentes/Header";
import { Title } from "../../componentes/Title";
import { Card } from "../../componentes/Card";

export const Profile = () => {

    return (
      <VStack flex={1} bgColor={"white"}>
        <Center>
          <Title color="blue.800" p={5}>
            Meu perfl
          </Title>
        </Center>
        <Center mt={5}>
          <Header name="Caila Rocha" />
        </Center>
        <Divider mt={6} />

        <Center>
          <Title color="blue.800" mt={4}>
            Histórico do serviços
          </Title>
        </Center>

        <Center mt={5}>
          <Card data="09/2023" typeService="Valor bruto do mês" money={550} />
          <Card data="09/2023" typeService="Valor bruto do mês" money={550} />
          <Card data="09/2023" typeService="Valor bruto do mês" money={550} />
        </Center>
      </VStack>
    );
}