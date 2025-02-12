import { useProfile } from "./ProfileProvider";
import styles from "../styles/ProfileModal.module.css";
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
        <div className={styles.modalContainer}>
          <div className="modal-content">
            <div className={styles.modal_header}>
              <img src={userObj.avatar_url} alt="" className={styles.modal_avatar} />
              <div style={{ width: "100%" }}>
                <div className={styles.modal_name}>{userObj.name}</div>
                <div className={styles.modal_login}>{userObj.login}</div>
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
