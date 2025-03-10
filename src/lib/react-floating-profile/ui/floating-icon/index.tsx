import { ProfileIcon } from "@components";
import { useProfile } from "@context";

interface FloatingIconPropTypes {
  avatar_url: string;
}

export default function FloatingIcon({ avatar_url }: FloatingIconPropTypes) {
  const { isOpen, setIsOpen } = useProfile();
  const onClickIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="icon-button-container">
      <ProfileIcon avatar_url={avatar_url} onClickIcon={onClickIcon} size="large" action />
    </div>
  );
}
