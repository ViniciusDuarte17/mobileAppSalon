import React, { useContext } from "react";
import { Header } from "../../componentes/Header";
import { VStack } from "native-base";
import { CustomChart } from "../../componentes/CustomChart";
import { BarChart } from "react-native-chart-kit";
import { GlobalStateContext } from "../../context/GlobalStateContext";


export const HeaderHome: React.FC = (  ) => {
  const { profile, byServiceMes } = useContext(GlobalStateContext);

  const data = {
    labels: byServiceMes.map((item) => item.dataTracker),
    datasets: [
      {
        data: byServiceMes.map((item) => item.valueTotalByService),
      },
    ],
  };

  return (
    <VStack flexDir={"column"}>
      <Header name={profile.name} />
      <CustomChart Chart={BarChart} byService={byServiceMes} data={data} />
    </VStack>
  );
};