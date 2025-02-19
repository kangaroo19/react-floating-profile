import { GitHubUser } from "../../types";
import ProfileIcon from "./ProfileIcon";

interface ProfileHeaderPropTypes {
  userObj: GitHubUser;
}

export default function ProfileHeader({ userObj }: ProfileHeaderPropTypes) {
  return (
    <div className="modal-header">
      <ProfileIcon avatar_url={userObj.avatar_url} size="large" />
      <div style={{ width: "80%" }}>
        <div className="modal-name">{userObj.name}</div>
        <div className="modal-login">
          {userObj.login} / {userObj.location}
        </div>
      </div>
    </div>
  );
}
