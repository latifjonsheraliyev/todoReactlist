import { createContext, useState } from "react";

const AppContext = createContext({});
const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("So'taqozi");

  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  );
};

export { UserContextProvider, AppContext };
