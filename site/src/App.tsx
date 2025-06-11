import { useState } from "react";
import ReactFloatingProfile from "react-floating-profile";
import Layout from "./components/layout/Layout";
import type { ReactElement } from "react";

type LocationType = "top-right" | "top-left" | "bottom-right" | "bottom-left";

function App() {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState<LocationType>("top-right");
  const [profileComponent, setProfileComponent] = useState<ReactElement | null>(null);

  // Pinned Repositories 상태
  const [repo1, setRepo1] = useState("");
  const [repo2, setRepo2] = useState("");
  const [repo3, setRepo3] = useState("");
  const [repo4, setRepo4] = useState("");
  const handleApply = () => {
    // 빈 문자열이 아닌 것들만 배열에 포함
    const pinnedRepos = [repo1, repo2, repo3, repo4].filter((repo) => repo.trim() !== "");

    setProfileComponent(
      <ReactFloatingProfile
        accessToken={import.meta.env.VITE_GITHUB_TOKEN || ""}
        userName={userName}
        pinnedRepoArr={
          pinnedRepos as [] | [string] | [string, string] | [string, string, string] | [string, string, string, string]
        }
        location={location}
      />
    );
    setUserName("");
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">React Floating Profile</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A React component that displays a GitHub-style profile. Beautifully shows a user's GitHub info, organizations, and pinned repositories.
            </p>
          <div className="flex justify-center space-x-4 mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">⚡ Fast</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🎨 Beautiful</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              📱 Responsive
            </span>
          </div>{" "}
          {/* GitHub 스타일 사용자 검색 */}
          <div className="mt-8">
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="github-username" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Your GitHub user ID
                </label>
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
                  </svg>{" "}
                  <input
                    id="github-username"
                    type="text"
                    value={userName}
                    onChange={(e) => {
                      setProfileComponent(null);
                      setUserName(e.target.value);
                    }}
                    className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="GitHub username"
                    autoComplete="off"
                  />{" "}
                </div>
              </div>

              {/* Location 선택 라디오 버튼 */}
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-3 text-left">Position</p>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="location"
                      value="top-right"
                      checked={location === "top-right"}
                      onChange={(e) => setLocation(e.target.value as LocationType)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">Top Right</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="location"
                      value="top-left"
                      checked={location === "top-left"}
                      onChange={(e) => setLocation(e.target.value as LocationType)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">Top Left</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="location"
                      value="bottom-right"
                      checked={location === "bottom-right"}
                      onChange={(e) => setLocation(e.target.value as LocationType)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">Bottom Right</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="location"
                      value="bottom-left"
                      checked={location === "bottom-left"}
                      onChange={(e) => setLocation(e.target.value as LocationType)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">Bottom Left</span>
                  </label>
                </div>
              </div>

              {/* Pinned Repositories 입력 */}
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-3 text-left">Pinned Repositories (Optional)</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={repo1}
                    onChange={(e) => setRepo1(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Repository 1 (e.g., react-floating-profile)"
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    value={repo2}
                    onChange={(e) => setRepo2(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Repository 2 (optional)"
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    value={repo3}
                    onChange={(e) => setRepo3(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Repository 3 (optional)"
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    value={repo4}
                    onChange={(e) => setRepo4(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Repository 4 (optional)"
                    autoComplete="off"
                  />
                </div>
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
