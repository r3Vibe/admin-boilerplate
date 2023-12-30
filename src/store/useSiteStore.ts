import { create } from "zustand";

interface SiteState {
  isLoading: boolean;
  setLoading: (loadstate: boolean) => void;
}

export const useSiteStore = create<SiteState>()((set) => ({
  isLoading: false,
  setLoading: (loadstate) => set({ isLoading: loadstate }),
}));
