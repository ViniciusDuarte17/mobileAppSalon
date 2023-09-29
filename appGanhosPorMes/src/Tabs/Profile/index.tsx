import React, { useState, useEffect } from "react";
import {  Center, VStack } from "native-base"
import { Title } from "../../componentes/Title";
import { ItypeService } from "../../interface/iTypeService";
import { servicos } from "../../utils/api";
import { Card } from "../../componentes/Card";
import { FlatList } from "react-native";
import { HeaderProfile } from "./components/HeaderProfile";

export const Profile: React.FC = () => {
  const [byService, setByService] = useState<ItypeService[]>([]);

  useEffect(() => {
    setByService(servicos);
  }, [byService]);

  let valorTotal = 0;

  byService.forEach((value) => {
    valorTotal += value.valueTotalByService;
  });

  return (
    <VStack flex={1} bgColor={"white"}>
      <FlatList
        data={byService}
        renderItem={({ item }) => <Card {...item} userName={false} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <HeaderProfile name="Caila Rocha" email="caila@rocha.com" />
        )}
      />
      <Center pb={7}>
        <Title color="blue.800" mt={4}>
          Ganho total
        </Title>
        <Title color="green.500">
          {valorTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Title>
      </Center>
    </VStack>
  );
};
