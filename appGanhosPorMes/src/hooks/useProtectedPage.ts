import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";


export const useProtectedPage = ({navigation, setCarregando}) => {
    useEffect(() => {
      const verifyLogin = async () => {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          navigation.replace("Tabs");
        }
        setCarregando(false);
      };
      verifyLogin();
    }, []);
}