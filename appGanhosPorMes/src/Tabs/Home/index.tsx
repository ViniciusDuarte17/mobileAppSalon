import React, { useState, useEffect } from "react";
import { VStack } from "native-base";
import { servicos } from "../../utils/api";
import { ItypeService } from "../../interface/iTypeService";
import { Card } from "../../componentes/Card";
import { agruparAcumularPorData } from "../../utils/agrupaAcumularPorData";
import { FlatList } from "react-native";
import { HeaderHome } from "../components";
import { isValidToken } from "../../hooks/isValidToken";
import { NavigationProps } from "../../@types/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Home:React.FC = ({navigation}:NavigationProps<'Login'>) => {
  const [byService, setByService] = useState<ItypeService[]>([]);

  useEffect( () => {
    const checkToken = async () => {
      const tokenExpirado = await isValidToken();
      if (tokenExpirado) {
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("pacienteId");
        navigation.replace("Login");
      }
    };

    checkToken()
    const tokenCheckInterval = setInterval(checkToken, 60 * 60 * 1000);
    return () => clearInterval(tokenCheckInterval);
  }, [navigation])

  useEffect(() => {
    function getService() {
      servicos.forEach((item) => {
        const data = new Date(item.dataTracker);
        const ano = data.getFullYear();
        const mes = data.getMonth() + 1;
        const newMes = mes < 10 ? `0${mes}` : mes;
        item.dataTracker = newMes + "/" + ano;

        if (item.dataTracker === item.dataTracker) {
        }
      });
      
      setByService(servicos);
    }
    getService();
  }, []);

 const result: ItypeService[] = agruparAcumularPorData(byService);
 
  return (
    <VStack flex={1} bgColor={"#fff"}>
      <FlatList
        data={result}
        renderItem={({ item }) => <Card {...item} userName={false} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <HeaderHome />}
      />
    </VStack>
  );
};
