import { useEffect } from "react";
import { getUserProfile } from "./api/getUserProfile";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

interface PropTypes {
  token?: string;
  username?: string;
}

export default function ReactFloatingProfile({ username }: PropTypes) {
  useEffect(() => {
    getUserProfile(username!)
      .then((data) => console.log("✅ 업데이트 성공:", data))
      .catch((error) => console.error("❌ 업데이트 실패:", error));
  }, []);
  return <div>hello</div>;
}
