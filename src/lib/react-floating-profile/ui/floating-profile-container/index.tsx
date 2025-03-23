import { MainOption } from "@types";
import FloatingIcon from "./floating-icon";
import FloatingModal from "./floating-modal";
import { useEffect } from "react";
import { useProfile } from "@context";
import { getRepoItem, getUserProfile } from "@api";

export default function FloatingProfileContainer({ accessToken, userName, pinnedRepoArr = [] }: MainOption) {
  const { userObj, setUserObj, pinnedRepoItemArr, setPinnedRepoItemArr, setAccessToken } = useProfile();
  useEffect(() => {
    setAccessToken(accessToken!);
    // 여기서 모든 api 요청 하는게 나을듯
    getUserProfile(userName, accessToken!)
      .then((data) => setUserObj(data))
      .catch(() => console.error("유저정보 못 가져옴"));

    getRepoItem(userName, pinnedRepoArr, accessToken!)
      .then((data) => setPinnedRepoItemArr(data))
      .catch(() => console.error("레포정보 못 가져옴"));
  }, []);
  return (
    <>
      {userObj && (
        <>
          <FloatingIcon avatar_url={userObj.avatar_url} />
          <FloatingModal userObj={userObj} pinnedRepoArr={pinnedRepoItemArr} />
        </>
      )}
    </>
  );
}
