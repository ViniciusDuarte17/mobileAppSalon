import AsyncStorage from "@react-native-async-storage/async-storage";

export const headers = {
  headers: {
    Authorization: AsyncStorage.getItem("token"),
  },
};