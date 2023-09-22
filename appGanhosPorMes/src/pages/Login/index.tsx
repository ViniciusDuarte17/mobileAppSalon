import React from "react";
import {  VStack, Text, Input } from "native-base"
import { Title } from "../../componentes/Title";
import { CustomImput } from "../../componentes/CustomInput";
import { CustomButton } from "../../componentes/CustomButton";
import {  NavigationProps } from "../../@types/navigation";

 export const Login: React.FC = ({navigation}: NavigationProps<'Cadastro'>) => {

    return(
        <VStack bgColor={'white'} flex={1} p={5}>
           <Title color={"blue.800"} position="center">
                Seja bem vindo
           </Title>

           <Title >
               Login
           </Title>

           <Text 
            fontSize={'md'}
            fontStyle={'normal'}
            fontWeight={"400"}
            lineHeight={'md'}
            mt={6}
           >
             Seja bem vindo ao seu gerenciador de finanças
           </Text>

           <VStack flex={1} mt={8}>
               <CustomImput
                placeholder="Digite seu email"
                label="Email"
               />
               <CustomImput
                placeholder="Digite sua senha"
                label="Senha"
                secureTextEntry
               />
               <CustomButton
               onPress={() => navigation.navigate('Home')}
               >
                 Login
               </CustomButton>
           </VStack>
           <CustomButton
             color="#ffff"
           >
            <Text onPress={() => navigation.navigate('Cadastro')} color={'blue.800'}> Não tem uma conta? Inscrever-se</Text>
           </CustomButton>
        </VStack>
    )
}