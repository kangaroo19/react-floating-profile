import styles from "../styles/FloatingIcon.module.css";
import { useProfile } from "./ProfileProvider";

interface FloatingIconPropTypes {
  avatar_url: string;
}

export default function FloatingIcon({ avatar_url }: FloatingIconPropTypes) {
  const { isOpen, setIsOpen } = useProfile();
  return (
    <div className={styles.floatingButton} onClick={() => setIsOpen(!isOpen)}>
      <img src={avatar_url} alt="" />
    </div>
  );
}
