# react-floating-profile
React component to display your github profile
<p align="left">
  <a href="https://www.npmjs.com/package/react-floating-profile"><img src="https://flat.badgen.net/npm/v/react-floating-profile" alt="react-floating-profile version" /></a>
  <a href="https://www.npmjs.com/package/react-floating-profile"><img src="https://flat.badgen.net/npm/license/react95" alt="react-floating-profile license" /></a>
</p>

## ✨ Features

- 🪄 **Floating UI**: Easily attach a floating user profile anywhere on your screen.
- 🧠 **Context API Powered**: No external state management libraries required.
- 🛠️ **TypeScript Support**: Full type safety and autocompletion.
- 💅 **GitHub-style UI**: Comes with a simple and clean interface inspired by GitHub.

---

## 📦 Installation

```bash
npm install react-floating-profile
```

## 🚀 Quck Start
```js
import ReactFloatingProfile from "react-floating-profile";

function App() {
  return (
    <ReactFloatingProfile
      userName="John Doe" // required
      accessToken="your_token_here"
      // 💡 accessToken is not required, but it's recommended to avoid GitHub API rate limits.
      pinnedRepoArr={["repo1", "repo2"]}
      location="top-right"
    />
  );
}
```
You can get a token [here](https://github.com/settings/tokens)

## Props

| Prop Name       | Type                                                                 | Required | Default         | Description                                                                 |
|----------------|----------------------------------------------------------------------|----------|------------------|-----------------------------------------------------------------------------|
| `userName`      | `string`                                                              | ✅       | —                | GitHub username to fetch and display profile information.                   |
| `pinnedRepoArr` | `[]` \| `[string]` \| `[string, string]` \| `[string, string, string]` \| `[string, string, string, string]` | ✅       | `[]`             | List of pinned repositories to display. Supports up to 4 items.             |
| `location`      | `"top-right"` \| `"top-left"` \| `"bottom-right"` \| `"bottom-left"`       | ❌       | `"bottom-right"` | Position of the floating widget on the screen.                              |
| `accessToken`   | `string`                                                              | ❌       | `""`             | GitHub access token to increase API request limits. Recommended but optional. |



## 💡 Contribution

Contributions are always welcome and there are absolutely no restrictions!
Feel free to open issues, suggest features, or submit pull requests anytime. 🙌
