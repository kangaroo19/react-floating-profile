"use client";

import { useEffect, useRef, useState } from "react";
import { getUserProfile } from "../api/getUserProfile";
import { GitHubUser } from "../types";
import "./style.css";
import { ProfileIcon, ProfileModal, ProfileProvider } from "./components";

interface PropTypes {
  token?: string;
  username?: string;
}

export default function ReactFloatingProfile({ username }: PropTypes) {
  const [userObj, setUserObj] = useState<GitHubUser | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    getUserProfile(username!)
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
          <ProfileModal userObj={userObj} />
        </ProfileProvider>
      )}
    </>
  );
}
