import React from "react";
import {  VStack, Text, Input } from "native-base"
import { Title } from "../../componentes/Title";
import { CustomImput } from "../../componentes/CustomInput";
import { CustomButton } from "../../componentes/CustomButton";
import { section } from "../../utils/section";

 export const Signup: React.FC = () => {

    return (
      <VStack bgColor={"white"} flex={1} p={5}>
        <Title color={"blue.800"} position="center">
          Criar nova conta
        </Title>

        <VStack flex={1} mt={8}>
          {section.map((list) => (
            <CustomImput
              key={list.id}
              placeholder={list.placeholder}
              label={list.label}
              secureTextEntry={list.secureTextEntry}
            />
          ))}
          <CustomButton>Cadastrar</CustomButton>
        </VStack>
      </VStack>
    );
}