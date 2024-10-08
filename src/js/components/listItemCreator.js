/**
 * ul 요소에 리스트 아이템 생성
 *
 * @param {Array} newsData - 뉴스 데이터를 포함하는 배열
 * @param {string} selector - 데이터를 삽입할 ul 요소의 셀렉터
 */
export function createListItems(newsData, selector) {
  const listElement = document.querySelector(selector);

  if (!listElement) {
    console.error(`DOM 요소를 찾을 수 없습니다: ${selector}`);
    return;
  }

  newsData.forEach((newsItem) => {
    const li = document.createElement("li");

    const pressSpan = document.createElement("span");
    pressSpan.textContent = newsItem.press;
    pressSpan.classList.add("press");

    const headlineSpan = document.createElement("span");
    headlineSpan.textContent = newsItem.headline;
    headlineSpan.classList.add("headline");

    li.appendChild(pressSpan);
    li.appendChild(headlineSpan);

    listElement.appendChild(li);
  });
}
