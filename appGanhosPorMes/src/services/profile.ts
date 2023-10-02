import axios from "axios";
import { api } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const profileService = async () => {
  const headers = {
    headers: {
      Authorization: await AsyncStorage.getItem("token"),
    },
  };

  try {
    const result = await axios.get(`${api}/cliente/perfil`, headers);

    return result.data.perfil;
  } catch (error) {
    return error;
  }
};