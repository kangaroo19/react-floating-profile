interface IconPropTypes {
  avatar_url: string;
  size?: "small" | "medium" | "large";
  onClickIcon?: () => void; // onClick 함수 추가
  className?: string;
}

/**
 *
 * @param avatar_url 이미지 url
 * @param size 아이콘 크기
 * @param action 클릭이벤트 실행 여부
 */

function Icon({ avatar_url, size = "medium", className, onClickIcon }: IconPropTypes) {
  return (
    <>
      <button className={`icon-${size} icon-button ${className}-container`} onClick={onClickIcon}>
        <img src={avatar_url} alt="" className={`${className}`} />
      </button>
    </>
  );
}

// For Profile Icon (Circle shape)
export function ProfileIcon({ avatar_url, size = "large", onClickIcon }: IconPropTypes) {
  return <Icon avatar_url={avatar_url} size={size} onClickIcon={onClickIcon} className="circle-shape" />;
}

// For Organization Icon (Rect shape)
export function OrganizationIcon({ avatar_url, size = "small", onClickIcon }: IconPropTypes) {
  return <Icon avatar_url={avatar_url} size={size} onClickIcon={onClickIcon} className="rect-shape" />;
}
