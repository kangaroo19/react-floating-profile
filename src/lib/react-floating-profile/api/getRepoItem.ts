import { RepoItemType } from "../types";

export default async function getRepoItem(
  username: string,
  pinnedRepoItemArr: string[],
  accessToken: string
): Promise<RepoItemType[]> {
  const REPO_URL = `https://api.github.com/repos/${username}/`;

  // 병렬 요청 처리
  const requests = pinnedRepoItemArr.map(async (repoName) => {
    const response = await fetch(`${REPO_URL}${repoName}`, {
      method: "GET",
      headers: {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
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
      stargazers_count: result.stargazers_count,
      forks_count: result.forks_count,
    };
  });

  // 모든 요청 병렬 처리 후 결과 반환
  return Promise.all(requests);
}
