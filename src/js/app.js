import { getFormattedDate } from "./utils/dateUtils.js";
import { createRoller } from "./utils/rollerUtils.js";

document.getElementById("current-date").textContent = getFormattedDate();
createRoller(".news-1-contents");
setTimeout(() => {
  createRoller(".news-2-contents");
}, 1000);
