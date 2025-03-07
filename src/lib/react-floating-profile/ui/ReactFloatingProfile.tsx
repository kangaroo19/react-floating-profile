"use client";

import { useEffect, useState } from "react";
import "./style.css";
import FloatingModal from "./floating-modal";
import FloatingIcon from "./floating-icon";
import { GitHubUser, RepoItemType } from "@types";
import { getRepoItem, getUserProfile } from "@api";
import { ProfileProvider } from "@context";

export default function ReactFloatingProfile({ userName, pinnedRepoArr = [], location = "bottom-right" }: MainOption) {
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
          <FloatingIcon avatar_url={userObj.avatar_url} />
          <FloatingModal userObj={userObj} pinnedRepoArr={pinnedRepoItemArr} />
        </ProfileProvider>
      )}
    </>
  );
}
