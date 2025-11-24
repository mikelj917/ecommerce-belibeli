import { LoginRequest, RegisterRequest } from "@repo/types/contracts";

export type LoginParams = LoginRequest;

export type RegisterParams = Omit<RegisterRequest, "confirmPassword">;

export type RefreshAccessTokenParams = {
  refreshToken: string;
};
