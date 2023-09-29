import React from "react";
import { Center, Divider, Text, VStack } from "native-base";
import { Title } from "../../../componentes/Title";
import { CustomButton } from "../../../componentes/CustomButton";
import { Header } from "../../../componentes/Header";

interface ProfileProps {
    name: string;
    email: string;
}

export const HeaderProfile: React.FC<ProfileProps> = ({name, email}) => {

  return (
    <VStack flex={1} bgColor={"white"}>
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
          {name}
        </Text>
        <Text fontSize={"sm"} color={"gray.600"}>
          {email}
        </Text>

        <CustomButton w={"25%"}>Sair</CustomButton>
      </Center>
      <Divider mt={6} />
      <Center mt={3}>
        <Title color="blue.800" pb={3}>
          Histórico de serviço
        </Title>
      </Center>
    </VStack>
  );
};
