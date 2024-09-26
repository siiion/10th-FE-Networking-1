import { getFormattedDate } from "./utils/dateUtils.js";

// DOMContentLoaded 이벤트 발생 시 날짜를 설정
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-date").textContent = getFormattedDate();
});
