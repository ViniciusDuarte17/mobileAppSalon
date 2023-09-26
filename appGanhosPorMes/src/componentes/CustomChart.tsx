import { ScrollView, Text } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { ItypeService } from "../interface/iTypeService";

interface ChartProps {
  Chart: any;
  byService: ItypeService[];
  data: {};
}

export const CustomChart: React.FC<ChartProps> = ({ Chart, byService, data }) => {

    const chartConfig = {
      backgroundColor: "#fff",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#ffff",
      color: () => `#198EB6`,
      labelColor: () => `#0f4a5e`,
      style: {
        borderRadius: 8,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
       
      },
    };

  return (
    <ScrollView
    horizontal
    p={3}
    >
      {byService.length > 0 ? (
        <Chart
          data={data}
          width={
            byService.length > 6
              ? Dimensions.get("window").width * 2
              : Dimensions.get("window").width - 20
          }
          height={200}
          yAxisLabel="R$ "
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={chartConfig}
          style={{
            marginVertical: 16,
            borderRadius: 8,
          }}
        />
      ) : (
        <Text>Seja bem vindo ao seu controle de finaças</Text>
      )}
    </ScrollView>
  );
};
