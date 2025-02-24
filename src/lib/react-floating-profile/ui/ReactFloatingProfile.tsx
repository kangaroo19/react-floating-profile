"use client";

import { useEffect, useState } from "react";
import { getUserProfile } from "../api/getUserProfile";
import "./style.css";
import { ProfileIcon, ProfileModal, ProfileProvider } from "./components";
import { GitHubUser, MainOption } from "../types";

export default function ReactFloatingProfile({ userName, pinnedRepoArr }: MainOption) {
  const [userObj, setUserObj] = useState<GitHubUser | null>(null);
  useEffect(() => {
    getUserProfile(userName!)
      .then((data) => setUserObj(data))
      .catch((error) => console.error("❌ 업데이트 실패:", error));
  }, []);
  return (
    <>
      {userObj && (
        <ProfileProvider>
          <div className="icon-button-container">
            <ProfileIcon avatar_url={userObj.avatar_url} size="large" action />
          </div>
          <ProfileModal userObj={userObj} pinnedRepoArr={pinnedRepoArr} />
        </ProfileProvider>
      )}
    </>
  );
}
