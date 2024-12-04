import { createContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const ctx = createContext(AuthContext);
  if (!ctx) throw new Error("Only used in AuthProvider");
  return ctx;
};

export default useAuth;
