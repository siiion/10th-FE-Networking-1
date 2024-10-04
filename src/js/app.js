import { getFormattedDate } from "./utils/dateUtils.js";
import { fetchRollerData } from "./services/fetchRollerData.js";

document.getElementById("current-date").textContent = getFormattedDate();

fetchRollerData("rollerData.json", "#news-1-contents", "news1");
fetchRollerData("rollerData.json", "#news-2-contents", "news2");

createRoller(".news-1-contents");
setTimeout(() => {
  createRoller(".news-2-contents");
}, 1000);
