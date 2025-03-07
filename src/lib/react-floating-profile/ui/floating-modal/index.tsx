import { useEffect, useState } from "react";
import { PinnedRepo, ProfileHeader, ReadMe } from "./components";
import { ModalOption } from "@types";
import { getUserReadme } from "@api";
import { CloseButton } from "@components";
import { useProfile } from "@context";

// SagathiyaJaydeep 얘처럼 이름이 없는경우도 있음

export default function FloatingModal({ userObj, pinnedRepoArr }: ModalOption) {
  const { isOpen } = useProfile();
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
            <CloseButton />
            <ProfileHeader userObj={userObj} />
            <ReadMe content={readme} />
            <PinnedRepo pinnedRepoArr={pinnedRepoArr!} />
          </div>
        </div>
      )}
    </>
  );
}
