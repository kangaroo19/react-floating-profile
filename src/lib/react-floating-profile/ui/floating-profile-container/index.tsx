import { MainOption } from "@types";
import FloatingIcon from "./floating-icon";
import FloatingModal from "./floating-modal";
import { useEffect } from "react";
import { useAuth, useProfile } from "@context";
import { getRepoItem, getUserProfile } from "@api";

export default function FloatingProfileContainer({ location, accessToken, userName, pinnedRepoArr = [] }: MainOption) {
  const { userObj, setUserObj, pinnedRepoItemArr, setPinnedRepoItemArr } = useProfile();
  const { setAccessToken } = useAuth();
  useEffect(() => {
    setAccessToken(accessToken!);
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
          <FloatingIcon avatar_url={userObj.avatar_url} location={location!} />
          <FloatingModal userObj={userObj} pinnedRepoArr={pinnedRepoItemArr} />
        </>
      )}
    </>
  );
}
