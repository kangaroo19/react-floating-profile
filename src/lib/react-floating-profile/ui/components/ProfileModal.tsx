import { useProfile } from "./ProfileProvider";
import { useEffect, useState } from "react";
import { getUserReadme } from "../../api/getUserReadme";
import { GitHubUser, ModalOption } from "../../types";
import ReadMe from "./ReadMe";
import ProfileHeader from "./ProfileHeader";
import PinnedRepoItem from "./PinnedRepoItem";

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
            {pinnedRepoArr?.map((item) => (
              <PinnedRepoItem repoName={item} />
            ))}
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
