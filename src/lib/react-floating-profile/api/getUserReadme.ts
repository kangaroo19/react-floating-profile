export async function getUserReadme(username: string) {
  const README_OBJ_URL = `https://api.github.com/repos/${username}/${username}/contents/README.md`;

  // README 파일 정보 가져오기
  const objResponse = await fetch(README_OBJ_URL, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!objResponse.ok) {
    const errorData = await objResponse.json();
    throw new Error(`GitHub API Error: ${errorData.message}`);
  }

  const readmeObj = await objResponse.json();
  const downloadUrl = readmeObj.download_url;

  if (!downloadUrl) {
    throw new Error("download_url not found in response.");
  }

  console.log("Download URL:", downloadUrl);

  // 실제 README.md 내용 가져오기
  const response = await fetch(downloadUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch README.md from ${downloadUrl}`);
  }

  return response.text();
}
