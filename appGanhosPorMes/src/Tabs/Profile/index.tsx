import React, { useState, useEffect } from "react";
import {  Center, Divider, Text, ScrollView } from "native-base"
import { Header } from "../../componentes/Header";
import { Title } from "../../componentes/Title";
import { CustomButton } from "../../componentes/CustomButton";
import { ItypeService } from "../../interface/iTypeService";
import { servicos } from "../../utils/api";
import { Card } from "../../componentes/Card";


export const Profile: React.FC = () => {
  const [byService, setByService] = useState<ItypeService[]>([]);

  useEffect( () => {
    setByService(servicos)
  }, [byService])

  let valorTotal = 0

  byService.forEach((value) => {
    valorTotal += value.valueTotalByService
  })

    return (
      <ScrollView flex={1} bgColor={"white"}>
        <Center>
          <Title color="blue.800" p={5}>
            Meu perfl
          </Title>
        </Center>
        <Center mt={3}>
          <Header />
        </Center>
        <Center>
          <Title color="blue.800" mt={4}>
            Informação pessoal
          </Title>
          <Text fontSize={"sm"} color={"gray.600"}>
            Caila Rocha
          </Text>
          <Text fontSize={"sm"} color={"gray.600"}>
            caila@gmail.com
          </Text>

          <CustomButton w={"25%"}>Sair</CustomButton>
        </Center>
        <Divider mt={6} />
        <Center mt={3}>
          <Title color="blue.800" pb={3}>
            Histórico de serviço
          </Title>
          {byService.length > 0 ? (
            byService.map((item) => (
              <Card
                key={item.id}
                data={item.dataTracker}
                typeService={item.typeService}
              />
            ))
          ) : (
            <Text>Sem informações no momento</Text>
          )}
        </Center>
        <Divider mt={2} />
        <Center pb={7}>
          <Title color="blue.800" mt={4}>
            Valor total ganho
          </Title>
          <Title color="green.500">
            {valorTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Title>
        </Center>
      </ScrollView>
    );
}