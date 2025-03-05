"use client";

import { useEffect, useState } from "react";
import "./style.css";
import { ProfileIcon, ProfileModal, ProfileProvider } from "./components";
import { GitHubUser, MainOption, RepoItemType } from "../types";
import { getRepoItem, getUserProfile } from "../api";

export default function ReactFloatingProfile({ userName, pinnedRepoArr }: MainOption) {
  const [userObj, setUserObj] = useState<GitHubUser | null>(null);
  const [pinnedRepoItemArr, setPinnedRepoItemArr] = useState<RepoItemType[] | []>([]);
  useEffect(() => {
    // 여기서 모든 api 요청 하는게 나을듯
    getUserProfile(userName)
      .then((data) => setUserObj(data))
      .catch(() => console.error("유저정보 못 가져옴"));

    getRepoItem(userName, pinnedRepoArr)
      .then((data) => setPinnedRepoItemArr(data))
      .catch(() => console.error("레포정보 못 가져옴"));
  }, []);
  return (
    <>
      {userObj && (
        <ProfileProvider>
          <div className="icon-button-container">
            <ProfileIcon avatar_url={userObj.avatar_url} size="large" action />
          </div>
          <ProfileModal userObj={userObj} pinnedRepoArr={pinnedRepoItemArr} />
        </ProfileProvider>
      )}
    </>
  );
}
