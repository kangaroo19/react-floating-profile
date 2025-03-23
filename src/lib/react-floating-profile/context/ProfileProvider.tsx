import { GitHubUser, RepoItemType } from "@types";
import { createContext, useContext, useState, ReactNode } from "react";

interface ProfileContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  userObj: GitHubUser | null;
  setUserObj: (value: GitHubUser | null) => void; // null 허용
  pinnedRepoItemArr: RepoItemType[] | [];
  setPinnedRepoItemArr: (data: RepoItemType[] | []) => void;
  accessToken: string;
  setAccessToken: (value: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userObj, setUserObj] = useState<GitHubUser | null>(null);
  const [pinnedRepoItemArr, setPinnedRepoItemArr] = useState<RepoItemType[]>([]);
  const [accessToken, setAccessToken] = useState<string>("");
  return (
    <ProfileContext.Provider
      value={{
        isOpen,
        setIsOpen,
        userObj,
        setUserObj,
        pinnedRepoItemArr,
        setPinnedRepoItemArr,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
