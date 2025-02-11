import { createContext, useContext, useState, ReactNode } from "react";

interface ProfileContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return <ProfileContext.Provider value={{ isOpen, setIsOpen }}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
