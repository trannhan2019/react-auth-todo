import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProfileType } from "../types/user.type";

type State = {
  isAuth: boolean;
  token: string | null;
  profile: ProfileType | null;
};

type Action = {
  setAuth: (isAuth: boolean) => void;
  setToken: (token: string) => void;
  setProfile: (profile: ProfileType) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Action>(
    (set) => ({
      isAuth: false,
      token: null,
      profile: null,

      setAuth: (isAuth: boolean) => set({ isAuth: isAuth }),
      setToken: (token: string) => set({ token: token }),
      setProfile: (profile: ProfileType) => set({ profile: profile }),
      logout: () => set(() => ({ token: null, profile: null, isAuth: false })),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
