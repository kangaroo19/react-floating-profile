import { useState } from "react";
import ReactFloatingProfile from "react-floating-profile";
import Layout from "./components/layout/Layout";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [profileComponent, setProfileComponent] = useState<JSX.Element | null>(null);
  const handleApply = () => {
    setProfileComponent(
      <ReactFloatingProfile
        accessToken={import.meta.env.VITE_GITHUB_TOKEN || ""}
        userName={inputValue}
        // pinnedRepoArr={["mbti-app", "chatting", "CodingTest", "toDo_List"]}
        location="top-right"
      />
    );
    setInputValue("");
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">React Floating Profile</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            GitHub 스타일의 프로필을 표시하는 React 컴포넌트입니다. 사용자의 GitHub 정보, 조직, 고정된 저장소를 아름답게
            보여줍니다.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">⚡ Fast</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🎨 Beautiful</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              📱 Responsive
            </span>
          </div>
          {/* GitHub 스타일 사용자 검색 */}
          <div className="mt-8">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setProfileComponent(null);
                    setInputValue(e.target.value);
                  }}
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="GitHub username"
                  autoComplete="off"
                />
              </div>
              <div className="flex justify-center mt-3">
                <button
                  onClick={handleApply}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Apply
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center">Enter a GitHub username to see their profile</p>
            </div>
          </div>
        </section>
        {/* Demo Section */}
        <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 Live Demo</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-600 text-center mb-4">오른쪽 상단의 프로필 아이콘을 클릭해보세요!</p>
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span className="text-gray-500">👆</span>
                <span className="text-gray-700">프로필 아이콘 클릭</span>
                <span className="text-gray-500">→</span>
                <span className="text-blue-600 font-medium">모달 열기</span>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-3xl mb-4">👤</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">사용자 프로필</h3>
            <p className="text-gray-600">GitHub 사용자의 기본 정보와 통계를 표시합니다.</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">조직 정보</h3>
            <p className="text-gray-600">사용자가 속한 GitHub 조직들을 보여줍니다.</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-3xl mb-4">📌</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">고정 저장소</h3>
            <p className="text-gray-600">선택한 저장소들을 하이라이트로 표시합니다.</p>
          </div>
        </section>
        {/* Code Example */}
        <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 사용 방법</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`import ReactFloatingProfile from "react-floating-profile";

function App() {
  return (
    <ReactFloatingProfile
      accessToken="your-github-token"
      userName="your-username"
      pinnedRepoArr={["repo1", "repo2", "repo3"]}
      location="top-right"
    />
  );
}`}</code>
            </pre>
          </div>
        </section>{" "}
      </main>

      {/* React Floating Profile Component */}
      {profileComponent}
    </Layout>
  );
}

export default App;
