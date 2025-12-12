import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useLogin } from "@/app/shared/hooks/data/useAuthMutations";

import { type LoginFormData,loginSchema } from "../../../schemas/loginSchema";

export const useLoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [authError, setAuthError] = useState<string>("");
  const { mutate } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    mutate(data, {
      onError: (error) => {
        const data = error.response?.data as {
          message: string;
          details: string;
        };
        setAuthError(data.details);
      },
    });
  };

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  return {
    isPasswordVisible,
    authError,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    togglePasswordVisibility,
    setAuthError,
  };
};
