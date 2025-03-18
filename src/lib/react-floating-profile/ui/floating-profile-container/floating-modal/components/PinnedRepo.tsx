import { RepoItemType } from "@types";
import { addCommasToNumber } from "@util";

interface PinnedRepoItemPropTypes {
  pinnedRepoArr: RepoItemType[];
}
export default function PinnedRepo({ pinnedRepoArr }: PinnedRepoItemPropTypes) {
  return (
    <>
      {pinnedRepoArr.length > 0 && (
        <div className="repo-container">
          <div className="repo-label">My Works</div>
          {pinnedRepoArr?.map((item) => (
            <div className="repo-item" key={item.id}>
              <a className="repo-title" href={item.html_url} target="_blank">
                {item.name}
              </a>
              <div className="repo-desc">{item.description}</div>
              <div className="repo-lan">
                {item.language || "No Langauge"} {`/ ${addCommasToNumber(item.stargazers_count)} Stars`}{" "}
                {`/ ${addCommasToNumber(item.forks_count)} Fork`}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
