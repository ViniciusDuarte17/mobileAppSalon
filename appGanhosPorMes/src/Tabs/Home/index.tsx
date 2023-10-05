import React, { useEffect, useContext } from "react";
import { VStack } from "native-base";
import { Card } from "../../componentes/Card";
import { FlatList } from "react-native";
import { HeaderHome } from "../components";
import { isValidToken } from "../../hooks/isValidToken";
import { NavigationProps } from "../../@types/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalStateContext } from "../../context/GlobalStateContext";


export const Home:React.FC = ({navigation}:NavigationProps<'Login'>) => {
  const { byServiceMes, dataService, counter } = useContext(GlobalStateContext);

  useEffect(() => {
    dataService()
    const checkToken = async () => {
      const tokenExpirado = await isValidToken();
      if (tokenExpirado) {
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("pacienteId");
        navigation.replace("Login");
      }
    };
  
    checkToken();
    const tokenCheckInterval = setInterval(checkToken, 60 * 60 * 1000);
    return () => clearInterval(tokenCheckInterval);
  }, [navigation, counter]);

  return (
    <VStack flex={1} bgColor={"#fff"}>
      <FlatList
        data={byServiceMes}
        renderItem={({ item }) => <Card {...item} userName={false} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <HeaderHome />}
      />
    </VStack>
  );
};
