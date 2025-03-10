import { OrgItem } from "@types";

export default async function getOrganizations(organizations_url: string): Promise<OrgItem[]> {
  const response = await fetch(organizations_url, {
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
