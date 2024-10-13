/**
 * 카테고리 바 생성
 *
 * @param {Array} categories - 카테고리 배열
 * @param {string} containerSelector - 카테고리를 추가할 컨테이너의 선택자
 */
export function generateCategory(categories, containerSelector) {
  const fieldTab = document.querySelector(containerSelector);

  fieldTab.innerHTML = categories
    .map(
      (category, index) => `
          <div class="category" data-index="${index}">
            <span class="category-text">${category}</span>
            <span class="progress-text"></span>
          </div>
        `
    )
    .join("");
}
