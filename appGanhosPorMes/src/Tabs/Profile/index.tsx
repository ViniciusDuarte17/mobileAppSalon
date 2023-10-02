import React, { useState, useEffect } from "react";
import { Center, VStack } from "native-base"
import { Title } from "../../componentes/Title";
import { ItypeService } from "../../interface/iTypeService";
import { servicos } from "../../utils/api";
import { Card } from "../../componentes/Card";
import { FlatList } from "react-native";
import { HeaderProfile } from "./components/HeaderProfile";
import { NavigationProps } from "../../@types/navigation";
import { IProfile } from "../../interface/user";
import { profileService } from "../../services/profile";
import { listservice } from "../../services/listService";

export const Profile: React.FC = ({navigation}: NavigationProps<'Tabs'>) => {
  const [byService, setByService] = useState<ItypeService[]>([]);
  const [profile, setProfile] = useState({} as IProfile)

  async function getProfile(){
    setProfile(await profileService())
  }
  async function listService(){
    setByService(await listservice())
  }

  useEffect(() => {
    listService()
    getProfile();
  }, []);

  let valorTotal = 0;

  byService.forEach((value) => {
    valorTotal += value.valueTotalByService;
  });

  return (
    <VStack flex={1} bgColor={"white"}>
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
          <Center pb={7}>
            <Title color="blue.800" mt={4}>
              Ganho total
            </Title>
            <Title color="green.500">
              {valorTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Title>
          </Center>
        }
      />
    </VStack>
  );
};
