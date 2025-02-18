import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ReadMePropTypes {
  content: any;
}

export default function ReadMe({ content }: ReadMePropTypes) {
  return <Markdown className="readme-container" children={content} rehypePlugins={[rehypeRaw]} />;
}
