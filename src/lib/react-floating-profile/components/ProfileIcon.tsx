import { useProfile } from "@context";

interface ProfileIconPropTypes {
  avatar_url: string;
  size?: "small" | "medium" | "large";
  onClickIcon?: () => void; // onClick 함수 추가
}
/**
 *
 * @param avatar_url 이미지 url
 * @param size 아이콘 크기
 * @param action 클릭이벤트 실행 여부
 */
export default function ProfileIcon({ avatar_url, size = "medium", onClickIcon }: ProfileIconPropTypes) {
  return (
    <>
      <button className={`icon-${size} icon-button`} onClick={onClickIcon}>
        <img src={avatar_url} alt="" />
      </button>
    </>
  );
}
