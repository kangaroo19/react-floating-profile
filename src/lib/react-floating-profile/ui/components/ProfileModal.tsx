import { useProfile } from "./ProfileProvider";
import styles from "../styles/ProfileModal.module.css";
export default function ProfileModal() {
  const { isOpen, setIsOpen } = useProfile();

  return (
    <>
      {isOpen && (
        <div className={styles.modalContainer}>
          <div className="modal-content">
            <h3>GitHub Profile</h3>
            <p>여기에 사용자 정보 추가 가능</p>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
