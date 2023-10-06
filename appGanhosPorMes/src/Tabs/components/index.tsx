import React from "react";
import { Header } from "../../componentes/Header";
import { VStack } from "native-base";
import { CustomChart } from "../../componentes/CustomChart";
import { BarChart } from "react-native-chart-kit";
import { ItypeService } from "../../interface/iTypeService";
import { IProfile } from "../../interface/user";

interface PropsHeaderHome {
  byServiceMes: ItypeService[];
  profile: IProfile;
}

export const HeaderHome: React.FC<PropsHeaderHome> = ( {byServiceMes, profile } ) => {

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
      {Object.keys(profile).length > 0 ? (
        <CustomChart Chart={BarChart} byService={byServiceMes} data={data} />
      ) : null}
    </VStack>
  );
};