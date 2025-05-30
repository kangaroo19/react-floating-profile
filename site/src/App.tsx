import ReactFloatingProfile from "react-floating-profile";

const token = import.meta.env.VITE_GITHUB_TOKEN;

function App() {
  return (
    <>
      <div>
        데모페이지 입니다.{" "}
        <ReactFloatingProfile
          accessToken={token}
          userName="kangaroo19"
          pinnedRepoArr={["mbti-app", "chatting", "CodingTest", "toDo_List"]}
          location="top-right"
        />
      </div>
    </>
  );
}

export default App;
