export function createRollerList(newsArray, listElement) {
  newsArray.forEach((newsItem) => {
    const li = document.createElement("li");

    const pressElement = document.createElement("span");
    pressElement.classList.add("press");
    pressElement.textContent = newsItem.press;

    const headlineElement = document.createElement("span");
    headlineElement.classList.add("headline");
    headlineElement.textContent = newsItem.headline;

    li.appendChild(pressElement);
    li.appendChild(headlineElement);

    listElement.appendChild(li);
  });
}
