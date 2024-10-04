/**
 * 자동 롤링 영역에 json 데이터를 fetch 하는 함수
 *
 * @async
 * @function fetchRollerData
 * @param {string} jsonFile - json 파일의 경로
 * @param {string} selector - 데이터를 삽입할 ul 요소
 * @param {string} key - json 데이터의 키를 선택
 * @throws {Error} - 네트워크 에러
 * @returns {Promise<void>} - json 데이터를 가져와 철리하는 비동기 함수
 *
 */
export async function fetchRollerData(jsonFile, selector, key) {
  try {
    const response = await fetch(`../data/${jsonFile}`);
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
