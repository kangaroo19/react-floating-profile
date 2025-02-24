export default async function getRepoItem(repoName: string) {
  const REPO_URL = `https://api.github.com/repos/kangaroo19/${repoName}`;
  const response = await fetch(REPO_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`레포네임 API Error: ${errorData.message}`);
  }
  return response.json();
}
