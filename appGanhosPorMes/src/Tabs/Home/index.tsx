import React, { useState, useEffect } from "react";
import {  VStack, Text, Avatar, ScrollView } from "native-base";
import { servicos } from "../../utils/api";
import { BarChart } from "react-native-chart-kit";
import { CustomChart } from "../../componentes/CustomChart";
import { ItypeService } from "../../interface/iTypeService";
import { Header } from "../../componentes/Header";
import { Card } from "../../componentes/Card";


export const Home:React.FC = () => {
  const [byService, setByService] = useState<ItypeService[]>([]);

  useEffect(() => {
    function getService() {
      
      const filterServicos = servicos.filter(
        (item) =>
         item.valueTotalByService !== undefined 
      );

      setByService(filterServicos);
    }
    getService();
  }, []);

  const data = {
    labels: byService.map( (item) => item.dataTracker),
    datasets: [
      {
        data: byService.map((item) => item.valueTotalByService),
      },
    ],
  };

 
  return (
    <ScrollView bgColor={"#fff"}>
      <Header />
      <CustomChart Chart={BarChart} byService={byService} data={data} />
      {byService.map((item) => (
        <Card
          key={item.id}
          data={item.dataTracker}
          money={item.valueTotalByService}
          typeService={item.typeService}
        />
      ))}
    </ScrollView>
  );
};
