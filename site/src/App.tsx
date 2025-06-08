import ReactFloatingProfile from "react-floating-profile";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* GitHub-style Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-gray-900">🐙 React Floating Profile</div>
              <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Demo</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/kangaroo19/react-floating-profile"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">React Floating Profile Component</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            GitHub 스타일의 프로필을 표시하는 React 컴포넌트입니다. 사용자의 GitHub 정보, 조직, 고정된 저장소를 아름답게
            보여줍니다.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">⚡ Fast</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🎨 Beautiful</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              📱 Responsive
            </span>
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
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>Made with ❤️ by kangaroo19</p>
            <p className="mt-2 text-sm">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>

      {/* React Floating Profile Component */}
      <ReactFloatingProfile
        userName="kangaroo19"
        pinnedRepoArr={["mbti-app", "chatting", "CodingTest", "toDo_List"]}
        location="top-right"
      />
    </div>
  );
}

export default App;
