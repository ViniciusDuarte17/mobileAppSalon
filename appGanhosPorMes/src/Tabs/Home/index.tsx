import React, { useState, useEffect } from "react";
import { VStack } from "native-base";
import { servicos } from "../../utils/api";
import { ItypeService } from "../../interface/iTypeService";
import { Card } from "../../componentes/Card";
import { agruparAcumularPorData } from "../../utils/agrupaAcumularPorData";
import { FlatList } from "react-native";
import { HeaderHome } from "../components";


export const Home:React.FC = () => {
  const [byService, setByService] = useState<ItypeService[]>([]);

  useEffect(() => {
    function getService() {
      servicos.forEach( (item) => {
        const data = new Date(item.dataTracker) 
        const ano = data.getFullYear()
        const mes = data.getMonth() + 1
        const newMes = mes < 10 ? `0${mes}`: mes
        item.dataTracker = newMes +'/' + ano

        if(item.dataTracker === item.dataTracker ) {}
      })
      setByService(servicos)
    }
    getService();
  }, []);

 const result: ItypeService[] = agruparAcumularPorData(byService);
 
  return (
    <VStack flex={1} bgColor={"#fff"} >
      <FlatList
        data={result}
        renderItem={({ item }) => <Card {...item} userName={false} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <HeaderHome />}
      />
      
    </VStack>
  );
};
