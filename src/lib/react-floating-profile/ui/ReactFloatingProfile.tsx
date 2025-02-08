import { useEffect, useState } from "react";
import { getUserProfile } from "../api/getUserProfile";
import FloatingIcon from "./components/FloatingIcon";
import { GitHubUser } from "../types";

interface PropTypes {
  token?: string;
  username?: string;
}

export default function ReactFloatingProfile({ username }: PropTypes) {
  const [userObj, setUserObj] = useState<GitHubUser | null>(null);
  useEffect(() => {
    getUserProfile(username!)
      .then((data) => setUserObj(data))
      .catch((error) => console.error("❌ 업데이트 실패:", error));
  }, []);
  return <>{userObj && <FloatingIcon avatar_url={userObj.avatar_url} />}</>;
}
