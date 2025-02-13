import { useProfile } from "./ProfileProvider";
import { GitHubUser } from "../../../../../dist/lib/react-floating-profile/types";
import { useEffect, useState } from "react";
import { getUserReadme } from "../../api/getUserReadme";

interface ProfileModalPropTypes {
  userObj: GitHubUser;
}

export default function ProfileModal({ userObj }: ProfileModalPropTypes) {
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
            <div className="modal-header">
              <img src={userObj.avatar_url} alt="" className="modal-avatar" />
              <div style={{ width: "100%" }}>
                <div className="modal-name">{userObj.name}</div>
                <div className="modal-login">{userObj.login}</div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: readme }} />
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
