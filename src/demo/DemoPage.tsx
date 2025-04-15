import ReactFloatingProfile from "index";

const token = import.meta.env.VITE_GITHUB_TOKEN;

export default function DemoPage() {
  return (
    <div>
      데모페이지 입니다.{" "}
      <ReactFloatingProfile
        accessToken={token}
        userName="kangaroo19"
        pinnedRepoArr={["mbti-app", "chatting", "CodingTest", "toDo_List"]}
        location="top-right"
      />
    </div>
  );
}
