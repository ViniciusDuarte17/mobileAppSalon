import React, { useState, useContext } from "react";
import {  VStack, Text, useToast } from "native-base"
import { Title } from "../../componentes/Title";
import { CustomImput } from "../../componentes/CustomInput";
import { CustomButton } from "../../componentes/CustomButton";
import {  NavigationProps } from "../../@types/navigation";
import { section } from "../../utils/section";
import { login } from "../../services/authen";
import { IUser } from "../../interface/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { MySpinner } from "../../componentes/Spinner";


 export const Login: React.FC = ({navigation}: NavigationProps<'Cadastro'>) => {
  const [data, setData] = useState({} as IUser);
  const [carregando, setCarregando] = useState(true)
  const [loading, setLoading] = useState(false)
  useProtectedPage({navigation, setCarregando})
  const toast = useToast();

  function updateData (id: string, valor: string) {
    setData({...data, [id]: valor})
  };

  const submitLogin = async () => {
    setLoading(true)
    const result = await login(data);

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
          title: "Erro no login",
          description: "O email ou senha não conferem",
          backgroundColor: "red.500",
        });
      }
    } else {
      toast.show({
        title: "Erro no login",
        description: "É necessário preencher todas os campos",
        backgroundColor: "red.500",
      });
    }
    setLoading(false)
  };

  if (carregando) {
    return null;
  }
    return (
      <VStack bgColor={"white"} flex={1} p={5}>
        <Title color={"blue.800"} position="center">
          Seja bem-vindo(a)!
        </Title>

        <Title>Login</Title>

        <Text
          fontSize={"md"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"md"}
          mt={6}
        >
          Seja bem vindo ao seu gerenciador de finanças
        </Text>

        <VStack flex={1} mt={8}>
          {section.login.map((list) => (
            <CustomImput
              key={list.id}
              placeholder={list.placeholder}
              label={list.label}
              secureTextEntry={list.secureTextEntry}
              value={data[list.name]}
              onChangeText={(text) => updateData(list.name, text)}
            />
          ))}
          <CustomButton onPress={submitLogin}>
            {
              !loading ? "Login": <MySpinner />
            }
          </CustomButton>
        </VStack>
        <CustomButton color="#ffff">
          <Text
            onPress={() => navigation.navigate("Cadastro")}
            color={"blue.800"}
          >
            Não tem uma conta? Inscrever-se
          </Text>
        </CustomButton>
      </VStack>
    );
}