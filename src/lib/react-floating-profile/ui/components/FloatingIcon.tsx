import { useProfile } from "./ProfileProvider";

interface FloatingIconPropTypes {
  avatar_url: string;
}

export default function FloatingIcon({ avatar_url }: FloatingIconPropTypes) {
  const { isOpen, setIsOpen } = useProfile();
  return (
    <>
      {!isOpen && (
        <div className="floating-button" onClick={() => setIsOpen(!isOpen)}>
          <img src={avatar_url} alt="" />
        </div>
      )}
    </>
  );
}
