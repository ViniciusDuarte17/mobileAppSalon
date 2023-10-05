import React, { useState } from "react";
import { VStack, useToast } from "native-base"
import { Title } from "../../componentes/Title";
import { CustomImput } from "../../componentes/CustomInput";
import { CustomButton } from "../../componentes/CustomButton";
import { section } from "../../utils/section";
import { ISignup } from "../../interface/user";
import { sigunp } from "../../services/authen";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProps } from "../../@types/navigation";

 export const Signup: React.FC = ({navigation}: NavigationProps<'Cadastro'>) => {
  const toast = useToast();
  const [data, setData] = useState({} as ISignup);

  function updateData (id: string, valor: string) {
    setData({...data, [id]: valor})
  };

  const submitSigunp = async () => {
    const result = await sigunp(data)
    if (result) {
      const { token } = result;
      if (token !== undefined) {
        AsyncStorage.setItem("token", token);
        const tokenDecodificado = jwtDecode(token) as any;
        const userId = tokenDecodificado.id;
        AsyncStorage.setItem("userId", userId);

        return navigation.replace("Tabs");
      } else {
        toast.show({
          title: "Erro no cadastro",
          description: "As senhas não conferem!",
          backgroundColor: "red.500",
        });
      }
    } else {
      toast.show({
        title: "Erro no cadastro",
        description: "É necessário preencher todas os campos",
        backgroundColor: "red.500",
      });
    }
  
  };

    return (
      <VStack bgColor={"white"} flex={1} p={5}>
        <Title color={"blue.800"} position="center">
          Criar nova conta
        </Title>

        <VStack flex={1} mt={8}>
          {section.cadastro.map((list) => (
            <CustomImput
              key={list.id}
              placeholder={list.placeholder}
              label={list.label}
              secureTextEntry={list.secureTextEntry}
              value={data[list.name]}
              onChangeText={ (text) => updateData(list.name, text)}
            />
          ))}
          <CustomButton onPress={submitSigunp}>Cadastrar</CustomButton>
        </VStack>
      </VStack>
    );
}