import { Center, Text, VStack } from "native-base";
import React from "react";
import { Title } from "../../../componentes/Title";
import { ItypeService } from "../../../interface/iTypeService";

interface PropsFooterProfile {
  byService: ItypeService[];
  valorTotal: number;
}

export const FooterProfile: React.FC<PropsFooterProfile> = ({
  byService,
  valorTotal,
}) => {
  return (
    <Center pb={7}>
      {byService.length > 0 ? (
        <Title color="blue.800" mt={4}>
          Ganho total
        </Title>
      ) : null}
      {byService.length > 0 ? (
        <Title color="green.500">
          {valorTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Title>
      ) : (
        <VStack>
          <Text fontWeight={"bold"} color={"gray.500"}>
            Você ainda não tem registro financeiros.
          </Text>
        </VStack>
      )}
    </Center>
  );
};
