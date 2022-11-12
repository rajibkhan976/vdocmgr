import { createContext } from "react";

const AppData = {
  isAuthenticated: false,
  setIsAuthenticated: (status: boolean) => {},
  shouldUploadCredential: true,
  setShouldUploadCredential: (status: boolean) => {},
};

const AppContext = createContext(AppData);

export default AppContext;
