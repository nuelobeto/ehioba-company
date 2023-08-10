import axios from "axios";
import { BASE_URL } from "../config/baseUrl";
import { LoginT, RegisterT, ResetPasswordT } from "../types/types";

const register = async (payload: RegisterT) => {
  const response = await axios.post(`${BASE_URL}/register`, payload);

  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};

const login = async (payload: LoginT) => {
  const response = await axios.post(`${BASE_URL}/login`, payload);

  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};

const resetPassword = async (payload: ResetPasswordT) => {
  const response = await axios.put(`${BASE_URL}/reset-password`, payload);

  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authServices = {
  register,
  login,
  resetPassword,
  logout,
};

export default authServices;
