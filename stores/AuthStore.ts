import { getToken, removeToken, setToken } from "@/utils/Storage";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

type States = {
  isLoggedIn: boolean;
  accessToken: string | null;
  user: any | null;
};
type Actions = {
  setIsLoggedIn: (accessToken: string | null) => Promise<void>;
  setIsLoggedOut: () => Promise<void>;
  setLoadUser: () => Promise<void>;
};

export const useAuthStore = create<States & Actions>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  user: null,
  setIsLoggedIn: async (accessToken: string | null) => {
    await setToken("accessToken", accessToken || "");
    set({ accessToken, isLoggedIn: true, user: jwtDecode(accessToken || "") });
  },
  setIsLoggedOut: async () => {
    await removeToken("accessToken");
    set({ accessToken: null, isLoggedIn: false, user: null });
  },
  setLoadUser: async () => {
    const accessToken = await getToken("accessToken");
    if (accessToken) {
      set({ accessToken, isLoggedIn: true, user: jwtDecode(accessToken) });
    }
  },
}));
