import { VStack, Text } from "native-base";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'

interface CardProps {
    typeService?: string
    data?: string
    money?: number
}

export const Card: React.FC<CardProps> = ({typeService, data, money}) => {
  return (
    <VStack shadow={3} alignSelf={'center'} borderRadius={8} bg={"white"} w={'95%'} height={74} mb={3}>
      <VStack
        p={4}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <VStack flexDir={"row"} alignItems={"center"}>
          <Ionicons name={'rocket'} color={'#214c5a'} size={30}/>
          <VStack ml={5}>
            <Text pb={2}>{ typeService === undefined ? 'Valor bruto do mês': typeService }</Text>
            <Text>{data}</Text>
          </VStack>
        </VStack>
        <VStack>
          <Text color={"green.500"}>
            { money === undefined ? '' : money.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};
