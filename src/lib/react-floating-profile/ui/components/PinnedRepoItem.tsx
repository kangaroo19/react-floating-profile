import { PinnedRepoItemPropTypes } from "../../types";

export default function PinnedRepoItem({ pinnedRepoItem }: PinnedRepoItemPropTypes) {
  return (
    <div className="repo-item-container">
      <a className="repo-title" href={pinnedRepoItem.html_url} target="_blank">
        {pinnedRepoItem.name}
      </a>
      <div className="repo-desc">{pinnedRepoItem.description}</div>
    </div>
  );
}
