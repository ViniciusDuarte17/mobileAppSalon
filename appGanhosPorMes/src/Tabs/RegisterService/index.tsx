import React from "react";
import { VStack, Image} from "native-base"
import { Title } from "../../componentes/Title";
import { section } from "../../utils/section";
import { CustomImput } from "../../componentes/CustomInput";
import { CustomButton } from "../../componentes/CustomButton";


export const RegisterService = () => {

    return (
      <VStack flexDir={'column'} flex={1} bgColor={"white"}>
        <Title p={3} color={"blue.800"} position="center">
          Área de registro de serviços
        </Title>
          <Image
            marginTop={7}
            alignSelf={'center'}
            w={100}
            h={75}
            source={require("../../assets/financeiro.jpg")}
            alt="Logo do financeiro"
          />

        <VStack flex={1} p={4} justifyContent={'center'} >
          {section.registerService.map((list) => (
            <CustomImput
              key={list.id}
              placeholder={list.placeholder}
              label={list.label}
            />
          ))}
          <CustomButton onPress={() => {}}>
            Registrar
          </CustomButton>
        </VStack>
      </VStack>
    );
}