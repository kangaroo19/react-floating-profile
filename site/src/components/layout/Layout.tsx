import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">React Floating Profile</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#demo" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Demo
              </a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Docs
              </a>
              <a
                href="https://github.com/your-username/react-floating-profile"
                className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-600 text-sm">React Floating Profile</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Made with ❤️</span>
              <span>•</span>
              <span>© 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
