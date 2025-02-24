import { useEffect } from "react";
import { PinnedRepoItemPropTypes } from "../../types";
import getRepoItem from "../../api/getRepoItem";

export default function PinnedRepoItem({ repoName }: PinnedRepoItemPropTypes) {
  useEffect(() => {
    getRepoItem(repoName);
  }, []);
  return <div>{repoName}</div>;
}
