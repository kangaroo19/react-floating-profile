import { RepoItemType } from "../../types";

interface PinnedRepoItemPropTypes {
  pinnedRepoArr: RepoItemType[];
}
export default function PinnedRepo({ pinnedRepoArr }: PinnedRepoItemPropTypes) {
  return (
    <div className="repo-container">
      {pinnedRepoArr?.map((item) => (
        <div className="repo-item" key={item.id}>
          <a className="repo-title" href={item.html_url} target="_blank">
            {item.name}
          </a>
          <div className="repo-desc">{item.description}</div>
          <div className="repo-lan">{item.language}</div>
        </div>
      ))}
    </div>
  );
}
