import { createContext, useContext, ReactNode } from "react";

interface AuthContextType {
  accessToken?: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ accessToken, children }: { accessToken: string; children: ReactNode }) {
  return <AuthContext.Provider value={{ accessToken }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
