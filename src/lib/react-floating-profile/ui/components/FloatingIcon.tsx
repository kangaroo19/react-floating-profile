import styles from "../styles/FloatingIcon.module.css";

interface FloatingIconPropTypes {
  avatar_url: string;
}

export default function FloatingIcon({ avatar_url }: FloatingIconPropTypes) {
  return (
    <div className={styles.floatingButton}>
      <img src={avatar_url} alt="" />
    </div>
  );
}
