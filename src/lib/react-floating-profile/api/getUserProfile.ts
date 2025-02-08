import { GitHubUser } from "../types";

export async function getUserProfile(username: string): Promise<GitHubUser> {
  // const url = "https://api.github.com/user";
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`GitHub API Error: ${errorData.message}`);
  }

  return response.json();
}
