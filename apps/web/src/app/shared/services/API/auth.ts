import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@repo/types/contracts";

import API from "./API";

const login = async (userData: LoginRequest) => {
  const response = await API.post<LoginResponse>("/auth/login", userData);
  return response.data;
};

const register = async (userData: RegisterRequest) => {
  const response = await API.post<RegisterResponse>("/auth/register", userData);
  return response.data;
};

export const authService = { login, register };
