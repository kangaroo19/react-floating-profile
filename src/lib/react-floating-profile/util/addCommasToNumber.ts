export default function addCommasToNumber(num: number | undefined): string {
  if (!num) return "0";
  return num.toLocaleString(); // 기본적으로 세자리마다 콤마를 추가
}
