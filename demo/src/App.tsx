import ReactFloatingProfile from "react-floating-profile";
import "./App.css";
const token = import.meta.env.VITE_GITHUB_TOKEN;

function App() {
  return (
    <>
      This page is demo for react-flaoting-profile
      <ReactFloatingProfile
        accessToken={token}
        userName="kangaroo19"
        pinnedRepoArr={["mbti-app", "chatting", "CodingTest", "toDo_List"]}
        location="top-right"
      />
    </>
  );
}

export default App;
