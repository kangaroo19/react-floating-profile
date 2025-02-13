import { useEffect, useRef, useState } from "react";
import { getUserProfile } from "../api/getUserProfile";
import FloatingIcon from "./components/FloatingIcon";
import { GitHubUser } from "../types";
import ProfileModal from "./components/ProfileModal";
import { ProfileProvider } from "./components/ProfileProvider";
import "./style.css";
interface PropTypes {
  token?: string;
  username?: string;
}

export default function ReactFloatingProfile({ username }: PropTypes) {
  const [userObj, setUserObj] = useState<GitHubUser | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    getUserProfile(username!)
      .then((data) => setUserObj(data))
      .catch((error) => console.error("❌ 업데이트 실패:", error));
  }, []);
  return (
    <>
      {userObj && (
        <ProfileProvider>
          <FloatingIcon avatar_url={userObj.avatar_url} />
          <ProfileModal userObj={userObj} />
        </ProfileProvider>
      )}
    </>
  );
}
