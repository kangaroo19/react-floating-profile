import { useState } from "react";
import ReactFloatingProfile from "react-floating-profile";
import "./App.css";

const token = import.meta.env.VITE_GITHUB_TOKEN;

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    alert(`입력된 값: ${inputValue}`);
  };

  return (
    <>
      <div className="demo-container">
        <h1>React Floating Profile 데모</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="input-section">
          <input
            type="text"
            className="modern-input"
            placeholder="GitHub 사용자명을 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="modern-button" onClick={handleButtonClick}>
            검색
          </button>
        </div>

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
