import React, { useState, useEffect } from "react";
import { Header } from "../../componentes/Header";
import { VStack } from "native-base";
import { ItypeService } from "../../interface/iTypeService";
import { servicos } from "../../utils/api";
import { CustomChart } from "../../componentes/CustomChart";
import { BarChart } from "react-native-chart-kit";
import { agruparAcumularPorData } from "../../utils/agrupaAcumularPorData";


export const HeaderHome: React.FC = () => {
  const [byService, setByService] = useState<ItypeService[]>([]);
  useEffect(() => {
    setByService(servicos);
  }, [byService]);

  const result: ItypeService[] = agruparAcumularPorData(byService);

  const data = {
    labels: result.map((item) => item.dataTracker),
    datasets: [
      {
        data: result.map((item) => item.valueTotalByService),
      },
    ],
  };

  return (
    <VStack flexDir={"column"}>
      <Header name="Caia rocha" />
      <CustomChart Chart={BarChart} byService={byService} data={data} />
    </VStack>
  );
};