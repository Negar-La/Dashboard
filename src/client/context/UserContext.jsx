import { createContext, useState } from "react";

export const UserContext = createContext({
  storeNumber: "001",
  location: "Hoboken, NJ",
  setStoreNumber: () => {},
});

export function UserProvider({ children }) {
  const [storeNumber, setStoreNumber] = useState("502");
  const user = {
    storeNumber,
    location: "Louisville, KY",
    setStoreNumber,
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
