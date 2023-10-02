import React from "react";
import { Header } from "../../componentes/Header";
import { VStack } from "native-base";
import { ItypeService } from "../../interface/iTypeService";
import { CustomChart } from "../../componentes/CustomChart";
import { BarChart } from "react-native-chart-kit";
import { agruparAcumularPorData } from "../../utils/agrupaAcumularPorData";
import { IProfile } from "../../interface/user";

interface PropsHome {
  byService: ItypeService[]
  profile: IProfile
}

export const HeaderHome: React.FC<PropsHome> = ( {byService, profile} ) => {

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
      <Header name={profile.name} />
      <CustomChart Chart={BarChart} byService={byService} data={data} />
    </VStack>
  );
};