import { useProfile } from "./ProfileProvider";

interface ProfileIconPropTypes {
  avatar_url: string;
  size?: "small" | "medium" | "large";
}

export default function ProfileIcon({ avatar_url, size = "medium" }: ProfileIconPropTypes) {
  const { isOpen, setIsOpen } = useProfile();
  return (
    <>
      <div className={`icon-${size} icon-button`} onClick={() => setIsOpen(!isOpen)}>
        <img src={avatar_url} alt="" />
      </div>
    </>
  );
}
