/**
 * 자동 롤링 영역에 json 데이터 불러오기
 *
 * @param {string} selector - 데이터를 삽입할 ul 요소
 * @param {string} key - json 데이터의 키
 *
 */
export async function fetchRollerData(selector, key) {
  try {
    const response = await fetch(`/src/assets/data/rollerData.json`);
    if (!response.ok) {
      throw new Error("네트워크 응답에 문제가 있습니다.");
    }

    const data = await response.json();
    const listElement = document.querySelector(selector);

    data[key].forEach((newsItem) => {
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
  } catch (error) {
    console.error("데이터를 불러오는 중 문제가 발생했습니다:", error);
  }
}
