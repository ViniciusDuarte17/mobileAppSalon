import React, { ReactNode, useState } from "react";
import { IProfile } from "../interface/user";
import { profileService } from "../services/profile";
import { ItypeService } from "../interface/iTypeService";
import { listservice, listserviceMes } from "../services/listService";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface propsGlobal {
  profile: IProfile;
  byServiceMes: ItypeService[];
  byService: ItypeService[];
  counter: number;
  image: string;
  setCaunter: React.Dispatch<React.SetStateAction<number>>;
  dataService: () => Promise<void>;
  listService: () => Promise<void>;
  getProfile: () => Promise<void>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalStateContext = React.createContext({} as propsGlobal);

interface PropsGlobal {
  children: ReactNode;
}

 function GlobalState({ children }: PropsGlobal) {
  const [byServiceMes, setByServiceMes] = useState<ItypeService[]>([]);
  const [byService, setByService] = useState<ItypeService[]>([]);
  const [profile, setProfile] = useState({} as IProfile);
  const [counter, setCaunter] = useState<number>(0);
  const [image, setImage] = useState(null);
  
  async function getProfile() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setProfile(await profileService());
    }
  }

  async function dataService() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const result = await listserviceMes();
      setByServiceMes(result);
    }
  }

  async function listService() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setByService(await listservice());
    }
  }

  const data = {
    profile,
    byServiceMes,
    byService,
    counter,
    image, 
    setCaunter,
    dataService,
    listService,
    getProfile,
    setImage
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalState;