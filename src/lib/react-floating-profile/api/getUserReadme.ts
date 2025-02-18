export async function getUserReadme(username: string) {
  // const url = "https://api.github.com/user";
  const url = `https://raw.githubusercontent.com/${username}/${username}/refs/heads/main/README.md`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`GitHub API Error: ${errorData.message}`);
  }

  return response.text();
}
