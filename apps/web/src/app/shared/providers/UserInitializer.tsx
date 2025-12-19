"use client";

import { useEffect } from "react";

import { useGetUser } from "@/app/shared/hooks/data/useAuthQueries";
import { useUserStore } from "@/app/shared/store/useUser";

export function UserInitializer({ children }: { children: React.ReactNode }) {
  const { data, isError } = useGetUser();
  const setUser = useUserStore((s) => s.setUser);
  const clearUser = useUserStore((s) => s.clearUser);

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }

    if (isError) {
      clearUser();
    }
  }, [data, isError, setUser, clearUser]);

  return <>{children}</>;
}
