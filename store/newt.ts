import { create } from "zustand";

interface CompanyStore {
  currCompany: number;
  allCompanies: any;
  setCurrCompany: (currCompany: any) => void;
  setAllCompanies: (allCompanies: any) => void;
}

export const useCompanyStore = create<CompanyStore>((set) => ({
  currCompany: 0,
  allCompanies: [],
  setCurrCompany: (currCompany: any) => set({ currCompany }),
  setAllCompanies: (allCompanies: any) => set({ allCompanies }),
}));

interface AnalyticsStore {
  allAnalytics: any;
  setAllAnalytics: (allAnalytics: any) => void;
}

export const useAnalyticsStore = create<AnalyticsStore>((set) => ({
  allAnalytics: [],
  setAllAnalytics: (allAnalytics: any) => set({ allAnalytics }),
}));

interface ChatsStore {
  allChats: any;
  selectedChat: Number;
  setAllChats: (allChats: any) => void;
  setSelectedChat: (selectedChat: any) => void;
}

export const useChatsStore = create<ChatsStore>((set) => ({
  allChats: [],
  selectedChat: 0,
  setAllChats: (allChats: any) => set({ allChats }),
  setSelectedChat: (selectedChat: any) => set({ selectedChat }),
}));
