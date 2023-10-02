import React, { useState, useEffect } from "react";
import { VStack } from "native-base";
import { ItypeService } from "../../interface/iTypeService";
import { Card } from "../../componentes/Card";
import { FlatList } from "react-native";
import { HeaderHome } from "../components";
import { isValidToken } from "../../hooks/isValidToken";
import { NavigationProps } from "../../@types/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { listserviceMes } from "../../services/listService";
import { IProfile } from "../../interface/user"
import { profileService } from "../../services/profile";


export const Home:React.FC = ({navigation}:NavigationProps<'Login'>) => {
  const [byService, setByService] = useState<ItypeService[]>([]);
  const [profile, setProfile] = useState({} as IProfile)

  async function getProfile(){
    setProfile(await profileService())
  }

  async function dataService(){
    setByService(await listserviceMes())
  }

  useEffect( () => {
    const checkToken = async () => {
      const tokenExpirado = await isValidToken();
      if (tokenExpirado) {
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("pacienteId");
        navigation.replace("Login");
      }
    };
    getProfile()
    dataService()
    checkToken()
    const tokenCheckInterval = setInterval(checkToken, 60 * 60 * 1000);
    return () => clearInterval(tokenCheckInterval);
  }, [navigation])


  return (
    <VStack flex={1} bgColor={"#fff"}>
      <FlatList
        data={byService}
        renderItem={({ item }) => <Card {...item} userName={false} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <HeaderHome byService={byService} profile={profile} />}
      />
    </VStack>
  );
};
