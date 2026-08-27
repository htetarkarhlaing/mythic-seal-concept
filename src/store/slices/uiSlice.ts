import { StateCreator } from "zustand";

export interface UiSlice {
  isCartOpen: boolean;
  isVideoModalOpen: boolean;
  activePlayerId: string | null;
  activeMatchId: string | null;
  searchFilter: string;
  categoryFilter: string;
  isSoundEnabled: boolean;

  setIsCartOpen: (open: boolean) => void;
  setIsVideoModalOpen: (open: boolean) => void;
  setActivePlayerId: (id: string | null) => void;
  setActiveMatchId: (id: string | null) => void;
  setSearchFilter: (query: string) => void;
  setCategoryFilter: (category: string) => void;
  setIsSoundEnabled: (enabled: boolean) => void;
}

export const createUiSlice: StateCreator<UiSlice, [], [], UiSlice> = (set) => ({
  isCartOpen: false,
  isVideoModalOpen: false,
  activePlayerId: null,
  activeMatchId: null,
  searchFilter: "",
  categoryFilter: "ALL",
  isSoundEnabled: true,

  setIsCartOpen: (open) => set({ isCartOpen: open }),
  setIsVideoModalOpen: (open) => set({ isVideoModalOpen: open }),
  setActivePlayerId: (id) => set({ activePlayerId: id }),
  setActiveMatchId: (id) => set({ activeMatchId: id }),
  setSearchFilter: (query) => set({ searchFilter: query }),
  setCategoryFilter: (category) => set({ categoryFilter: category }),
  setIsSoundEnabled: (enabled) => set({ isSoundEnabled: enabled }),
});
