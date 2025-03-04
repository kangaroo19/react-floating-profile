import { RepoItemType } from "../types";

export default async function getRepoItemArr(pinnedRepoItemArr: string[]): Promise<RepoItemType[]> {
  const REPO_URL = "https://api.github.com/repos/kangaroo19/";

  // 병렬 요청 처리
  const requests = pinnedRepoItemArr.map(async (repoName) => {
    const response = await fetch(`${REPO_URL}${repoName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`레포네임 API Error: ${errorData.message}`);
    }

    const result = await response.json();
    return {
      id: result.id,
      name: result.name,
      description: result.description,
      language: result.language,
      html_url: result.html_url,
    };
  });

  // 모든 요청 병렬 처리 후 결과 반환
  return Promise.all(requests);
}
