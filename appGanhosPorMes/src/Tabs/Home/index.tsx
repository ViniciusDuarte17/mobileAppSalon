import React, { useState, useEffect } from "react";
import { ScrollView } from "native-base";
import { servicos } from "../../utils/api";
import { BarChart } from "react-native-chart-kit";
import { CustomChart } from "../../componentes/CustomChart";
import { ItypeService } from "../../interface/iTypeService";
import { Header } from "../../componentes/Header";
import { Card } from "../../componentes/Card";
import { agruparAcumularPorData } from "../../utils/agrupaAcumularPorData";


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

const result = agruparAcumularPorData(byService);

  const data = {
    labels: result.map( (item) => item.dataTracker),
    datasets: [
      {
        data: result.map((item) => item.valueTotalByService),
      },
    ],
  };
 
  return (
    <ScrollView bgColor={"#fff"}>
      <Header name="Caila Rocha" />
      <CustomChart Chart={BarChart} byService={byService} data={data} />
      {result.map((item) => (
        <Card
          key={item.id}
          data={item.dataTracker}
          money={item.valueTotalByService}
        />
      ))}
    </ScrollView>
  );
};