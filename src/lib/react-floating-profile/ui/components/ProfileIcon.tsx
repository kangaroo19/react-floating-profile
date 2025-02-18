import { useProfile } from "./ProfileProvider";

interface ProfileIconPropTypes {
  avatar_url: string;
  size?: "small" | "medium" | "large";
  isClick?: boolean;
}

export default function ProfileIcon({ avatar_url, size = "medium", isClick=false }: ProfileIconPropTypes) {
  const { isOpen, setIsOpen } = useProfile();
  const onClickIcon = () => {
    if (!isClick) return;
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`icon-${size} icon-button`} onClick={onClickIcon}>
        <img src={avatar_url} alt="" />
      </div>
    </>
  );
}
