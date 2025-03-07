import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ReadMePropTypes {
  content: string;
}

export default function ReadMe({ content }: ReadMePropTypes) {
  return (
    <Markdown className="readme-container" children={convertGitHubImageUrls(content)} rehypePlugins={[rehypeRaw]} />
  );
}

// 실제 이미지 데이터 가져오도록 하는 코드
function convertGitHubImageUrls(readmeContent: string): string {
  return readmeContent.replace(
    /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^"]+)/g,
    "https://raw.githubusercontent.com/$1/$2/refs/heads/$3"
  );
}
