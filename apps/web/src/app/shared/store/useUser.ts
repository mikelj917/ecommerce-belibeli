import type { GetUserResponse } from "@repo/types/contracts";
import { create } from "zustand";

type UserState = {
  user: GetUserResponse["user"];
  setUser: (user: GetUserResponse["user"]) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
