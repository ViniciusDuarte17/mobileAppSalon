import axios from "axios";
import { api } from "./api";
import { ISignup, IUser } from "../interface/user";

export const login = async (data: IUser) => {
  if (!data.email || !data.password) return null;

  try {
    const result = await axios.post(`${api}/cliente/login`, {
      email: data.email,
      password: data.password,
    });

    return result.data;
  } catch (error) {
    return error;
  }
};

export const sigunp = async (data: ISignup) => {
  const { name, email, password, confirmaSenha } = data;
  if (!name || !email || !password || !confirmaSenha) return null;

  if(password !== confirmaSenha) return null;

  try {
    const result = await axios.post(`${api}/cliente/signup`, {
      name,
      email,
      password,
    });

    return result.data;
  } catch (error) {
    return error;
  }
};