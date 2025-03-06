import { useProfile } from "./ProfileProvider";
import { useEffect, useState } from "react";
import { ModalOption } from "../../types";
import ReadMe from "./ReadMe";
import ProfileHeader from "./ProfileHeader";
import PinnedRepo from "./PinnedRepo";
import { getUserReadme } from "../../api";
import { CloseButton } from "../../components/Button";

// 폴더 구조를 지금 컴포넌트 계층구조처럼 만들어보기
// SagathiyaJaydeep 얘처럼 이름이 없는경우도 있음

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
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
              <CloseButton />
            </div>
            <ProfileHeader userObj={userObj} />
            <ReadMe content={readme} />
            <PinnedRepo pinnedRepoArr={pinnedRepoArr!} />
          </div>
        </div>
      )}
    </>
  );
}
