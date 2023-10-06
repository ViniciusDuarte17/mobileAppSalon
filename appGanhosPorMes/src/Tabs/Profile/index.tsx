import React, { useContext } from "react";
import { VStack } from "native-base"
import { Card } from "../../componentes/Card";
import { FlatList } from "react-native";
import { HeaderProfile } from "./components/HeaderProfile";
import { NavigationProps } from "../../@types/navigation";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { CustomSkeleton } from "../../componentes/Skeleton";
import { FooterProfile } from "./components/FooterProfile";

export const Profile: React.FC = ({navigation}: NavigationProps<'Tabs'>) => {
  const { profile, byService } = useContext(GlobalStateContext);

  let valorTotal = 0;

  byService.forEach((value) => {
    valorTotal += value.valueTotalByService;
  });

  return (
    <VStack flex={1} bgColor={"white"}>
      {Object.keys(profile).length > 0 ? (
        <FlatList
          data={byService}
          renderItem={({ item }) => <Card {...item} userName={true} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <HeaderProfile
              name={profile.name}
              email={profile.email}
              navigation={navigation}
            />
          )}
          ListFooterComponent={
            <FooterProfile byService={byService} valorTotal={valorTotal} />
          }
        />
      ) : (
        <CustomSkeleton />
      )}
    </VStack>
  );
};
