import { MainOption } from "@types";
import FloatingIcon from "./floating-icon";
import FloatingModal from "./floating-modal";
import { useEffect } from "react";
import { getRepoItem, getUserProfile } from "@api";
import { useProfile } from "@context";

export default function FloatingProfileContainer({
  userName,
  pinnedRepoArr = [],
  location = "bottom-right",
  accessToken,
}: MainOption) {
  const { userObj, setUserObj, pinnedRepoItemArr, setPinnedRepoItemArr } = useProfile();
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
        <>
          <FloatingIcon avatar_url={userObj.avatar_url} />
          <FloatingModal userObj={userObj} pinnedRepoArr={pinnedRepoItemArr} />
        </>
      )}
    </>
  );
}
