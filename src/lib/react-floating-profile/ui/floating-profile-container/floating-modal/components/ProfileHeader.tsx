import { ProfileIcon } from "@components";
import { GitHubUser } from "@types";
import { onNavigate } from "@util";

interface ProfileHeaderPropTypes {
  userObj: GitHubUser;
}

export default function ProfileHeader({ userObj }: ProfileHeaderPropTypes) {
  return (
    <div className="profile-header-container">
      <ProfileIcon avatar_url={userObj.avatar_url} onClickIcon={() => onNavigate(userObj.html_url)} />
      <div style={{ width: "80%", paddingLeft: "10px" }}>
        {/*There are cases where the name is missing  */}
        <div className="profile-name">{userObj.name || userObj.login}</div>
        <div className="profile-bio">{userObj.bio}</div>
        <div className="profile-login-location">
          <span className="profile-login">{userObj.login}</span> {userObj.location && `/ ${userObj.location}`}
        </div>
        <div className="profile-bio">{userObj.company}</div>
        <a className="profile-link" href={userObj.blog} target="_blank">
          {userObj.blog}
        </a>
      </div>
    </div>
  );
}
