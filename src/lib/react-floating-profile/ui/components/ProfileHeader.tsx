import { GitHubUser } from "../../types";
import ProfileIcon from "./ProfileIcon";

interface ProfileHeaderPropTypes {
  userObj: GitHubUser;
}

export default function ProfileHeader({ userObj }: ProfileHeaderPropTypes) {
  return (
    <div className="profile-header-container">
      <ProfileIcon avatar_url={userObj.avatar_url} size="large" />
      <div style={{ width: "80%", paddingLeft: "10px" }}>
        <div className="profile-name">{userObj.name}</div>
        <div className="profile-bio">{userObj.bio}</div>
        <div className="profile-login">
          {userObj.login} / {userObj.location}
        </div>
        <div className="profile-bio">{userObj.company}</div>
      </div>
    </div>
  );
}
