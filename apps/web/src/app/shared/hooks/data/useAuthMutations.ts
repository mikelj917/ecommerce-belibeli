"use client";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@repo/types/contracts";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { authService } from "@/app/shared/services/API/auth";

export const useLogin = () => {
  const router = useRouter();

  return useMutation<LoginResponse, AxiosError, LoginRequest>({
    mutationFn: (params: LoginRequest) => authService.login(params),
    onSuccess: () => {
      router.push("/");
    },
  });
};

export const useRegister = () => {
  const router = useRouter();

  return useMutation<RegisterResponse, AxiosError, RegisterRequest>({
    mutationFn: (params) => authService.register(params),
    onSuccess: () => {
      router.push("/");
    },
  });
};
