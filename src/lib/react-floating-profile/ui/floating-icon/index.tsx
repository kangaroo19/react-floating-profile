import { ProfileIcon } from "@components";

interface FloatingIconPropTypes {
  avatar_url: string;
}

export default function FloatingIcon({ avatar_url }: FloatingIconPropTypes) {
  return (
    <div className="icon-button-container">
      <ProfileIcon avatar_url={avatar_url} size="large" action />
    </div>
  );
}
