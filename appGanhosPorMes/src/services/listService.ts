import axios from "axios";
import { api } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const listserviceMes = async () => {
  const headers = {
    headers: {
      Authorization: await AsyncStorage.getItem("token"),
    },
  };

  try {
    const result = await axios.get(`${api}/service/mes`, headers);

    return result.data;
  } catch (error) {
    return error;
  }
};

export const listservice = async () => {
  const headers = {
    headers: {
      Authorization: await AsyncStorage.getItem("token"),
    },
  };

  try {
    const result = await axios.get(`${api}/service`, headers);

    return result.data;
  } catch (error) {
    return error;
  }
};