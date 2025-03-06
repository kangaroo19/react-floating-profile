import { useProfile } from "./ProfileProvider";
import { useEffect, useState } from "react";
import { ModalOption } from "../../types";
import ReadMe from "./ReadMe";
import ProfileHeader from "./ProfileHeader";
import PinnedRepo from "./PinnedRepo";
import { getUserReadme } from "../../api";

// 폴더 구조를 지금 컴포넌트 계층구조처럼 만들어보기

export default function ProfileModal({ userObj, pinnedRepoArr }: ModalOption) {
  const { isOpen, setIsOpen } = useProfile();
  const [readme, setReadme] = useState("");
  useEffect(() => {
    getUserReadme(userObj.login)
      .then((data) => {
        setReadme(data);
      })
      .catch((error) => console.error("❌ 업데이트 실패:", error));
  }, []);
  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <ProfileHeader userObj={userObj} />
            <ReadMe content={readme} />
            <PinnedRepo pinnedRepoArr={pinnedRepoArr!} />
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
