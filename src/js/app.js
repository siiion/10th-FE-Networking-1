import { getFormattedDate } from "./utils/dateUtils.js";
import { fetchRollerData } from "./services/fetchRollerData.js";
import { createRoller } from "./components/rollerComponent.js";

document.getElementById("current-date").textContent = getFormattedDate();

// 자동 롤링 배너 초기화
async function initRoller() {
  try {
    await fetchRollerData("#news-1-contents", "news1");
    await fetchRollerData("#news-2-contents", "news2");

    createRoller("#news-1-contents", 0);
    createRoller("#news-2-contents", 1000);
  } catch (error) {
    console.error("롤러 초기화 중 문제가 발생했습니다:", error);
  }
}

document.addEventListener("DOMContentLoaded", initRoller);
