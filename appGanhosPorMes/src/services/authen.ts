import axios from "axios";
import { api } from "./api";
import { IUser } from "../interface/user";

export const login = async (data: IUser) => {
  if (!data.email || !data.password) return null;

  try {
    const result = await axios.post(`${api}/cliente/login`, {
      email: data.email,
      password: data.password ,
    });

    return result.data;
  } catch (error) {
    return error;
  }
};

