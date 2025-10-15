// https://zustand.docs.pmnd.rs/integrations/persisting-store-data#storage
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from '../types/auth';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,

      setUser: (user: User | null) => set({ user }),

      logout: () => {
        set({ user: null });
        // TODO: Call logout API to clear httpOnly cookie
        // apiClient.post('/auth/logout');
      },

      isAuthenticated: () => get().user !== null,
    }),
    {
      name: "auth-storage", // localStorage
    }
  )
);
