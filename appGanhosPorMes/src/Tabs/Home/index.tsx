import React, { useState, useEffect } from "react";
import { VStack} from "native-base"
import { servicos } from "../../utils/api";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";


export const Home = () => {
  const [byService, setByService] = useState([])

  useEffect( () => {
     function getService() {
       const filterServicos = servicos.filter( (item) => item.valueTotalByService !== undefined)
       setByService(filterServicos)
    }
    getService()
  }, [])


    return (
      <VStack flex={1}>
        <BarChart
          data={{
            labels: ["2023/08", "2023/09", "2023/09", "2023/10"],
            datasets: [
              {
                data: byService.map((item) => item.valueTotalByService),
              },
            ],
          }}
          width={Dimensions.get("window").width} 
          height={220}
          yAxisLabel="$"
          yAxisSuffix="R"
          yAxisInterval={1} 
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#ffff",
            decimalPlaces: 2, 
            color: () => `#198EB6`,
            labelColor: () => `#0f4a5e`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
       
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

      </VStack>
    );
}