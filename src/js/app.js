import { getFormattedDate } from "./utils/dateUtils.js";
import { createRoller } from "./utils/rollerUtils.js";
import { rollerData } from "../assets/data/rollerData.js";
import { createRollerList } from "./components/createRollerList.js";

document.getElementById("current-date").textContent = getFormattedDate();
createRoller(".news-1-contents");
setTimeout(() => {
  createRoller(".news-2-contents");
}, 1000);

const roller1List = document.querySelector(".news-1-contents");
const roller2List = document.querySelector(".news-2-contents");

createRollerList(rollerData.roller1, roller1List);
createRollerList(rollerData.roller2, roller2List);
