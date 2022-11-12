import create from "zustand";

export interface AppStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (status: boolean) => void;
  shouldUploadCredential: boolean;
  setShouldUploadCredential: (status: boolean) => void;
}

const useAppStore = create(
  (set): AppStore => ({
    isAuthenticated: false,
    setIsAuthenticated: (status: boolean) => set({ isAuthenticated: status }),
    shouldUploadCredential: true,
    setShouldUploadCredential: (status: boolean) =>
      set({ shouldUploadCredential: status }),
  })
);

export default useAppStore;
