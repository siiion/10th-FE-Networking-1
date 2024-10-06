/**
 *
 * @returns - 시스템 시간 (yyyy. mm. dd. -요일)
 */
export function getFormattedDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const date = String(currentDate.getDate()).padStart(2, "0");

  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const day = week[currentDate.getDay()];

  return `${year}. ${month}. ${date}. ${day}`;
}
