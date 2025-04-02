import { ProfileIcon } from "@components";
import { useProfile } from "@context";
import { LocationType } from "@types";
import { useEffect, useState } from "react";

interface FloatingIconPropTypes {
  avatar_url: string;
  location: LocationType;
}

export default function FloatingIcon({ avatar_url, location }: FloatingIconPropTypes) {
  const { isOpen, setIsOpen } = useProfile();
  const [iconOffset, setIconOffset] = useState({});

  const onClickIcon = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    switch (location) {
      case "top-right":
        setIconOffset({ top: "20px", right: "20px" });
        break;
      case "top-left":
        setIconOffset({ top: "20px", left: "20px" });
        break;
      case "bottom-right":
        setIconOffset({ bottom: "20px", right: "20px" });
        break;
      case "bottom-left":
        setIconOffset({ bottom: "20px", left: "20px" });
        break;
    }
  }, [location]); // ✅ location 변경 시 useEffect 실행

  return (
    <div className="icon-button-container" onClick={onClickIcon} style={iconOffset}>
      <ProfileIcon avatar_url={avatar_url} onClickIcon={() => {}} />
    </div>
  );
}
