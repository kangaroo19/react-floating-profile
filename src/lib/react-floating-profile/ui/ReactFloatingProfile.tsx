"use client";

import { useEffect, useState } from "react";
import { getUserProfile } from "../api/getUserProfile";
import "./style.css";
import { ProfileIcon, ProfileModal, ProfileProvider } from "./components";
import { GitHubUser, MainOption, RepoItemType } from "../types";
import getRepoItemArr from "../api/getRepoItem";

export default function ReactFloatingProfile({ userName, pinnedRepoArr }: MainOption) {
  const [userObj, setUserObj] = useState<GitHubUser | null>(null);
  const [pinnedRepoItemArr, setPinnedRepoItemArr] = useState<RepoItemType[] | []>([]);
  useEffect(() => {
    // 여기서 모든 api 요청 하는게 나을듯
    getUserProfile(userName!)
      .then((data) => setUserObj(data))
      .catch(() => console.error("유저정보 못 가져옴"));

    getRepoItemArr(pinnedRepoArr)
      .then((data) => setPinnedRepoItemArr(data))
      .catch(() => console.error("유저정보 못 가져옴"));
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
