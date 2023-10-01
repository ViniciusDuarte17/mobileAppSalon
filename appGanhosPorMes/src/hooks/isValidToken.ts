import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface IDecode {
  exp: number;
  iat: number;
  id: string;
}


export const isValidToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");

    if(token === null) {
      return true
    }
   
    const decodedToken: IDecode = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return true; 
  }
};
