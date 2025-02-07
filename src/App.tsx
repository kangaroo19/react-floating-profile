import { useEffect } from "react";
import ReactFloatingProfile from "./lib/react-floating-profile";
import { getUserProfile } from "./lib/react-floating-profile/api/getUserProfile";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

function App() {
  getUserProfile(GITHUB_TOKEN, "monalisa octocat", "https://github.com/blog")
  .then((data) => console.log("✅ 업데이트 성공:", data))
  .catch((error) => console.error("❌ 업데이트 실패:", error));

  return (
    <>
      <ReactFloatingProfile />
    </>
  );
}

export default App;
