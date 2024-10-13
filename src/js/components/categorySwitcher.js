import { startProgressBarAnimation } from "./progressUpdater.js";

// 카테고리 전환 기능 초기화
export function initCategorySwitcher() {
  const categories = document.querySelectorAll("#field-tab .category");
  let currentIndex = 0;
  const totalCategories = categories.length;
  const totalNewsPerCategory = 3;
  const newsDisplayTime = 20000;
  let currentNewsIndex = 1;
  let progressBar;
  let progressInterval;

  // 다음 카테고리로 전환, 프로그레스 바 애니메이션 설정
  const switchToNextCategory = () => {
    // 모든 카테고리 초기화
    categories.forEach((category) => {
      category.classList.remove("active-category");
      category.querySelector(".progress-bar")?.remove();
      category.querySelector(".progress-text").textContent = "";
    });

    // 현재 카테고리 활성화
    const currentCategory = categories[currentIndex];
    currentCategory.classList.add("active-category");
    const progressText = currentCategory.querySelector(".progress-text");
    progressText.innerHTML = `<strong>${currentNewsIndex}</strong>/${totalNewsPerCategory}`;

    // 프로그레스 바 추가
    if (!progressBar || !currentCategory.contains(progressBar)) {
      progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      currentCategory.appendChild(progressBar);
    }

    progressBar.style.width = "0%";

    // 애니메이션 시작
    clearInterval(progressInterval);
    progressInterval = startProgressBarAnimation(
      progressBar,
      newsDisplayTime,
      () => {
        currentNewsIndex++;
        if (currentNewsIndex > totalNewsPerCategory) {
          currentNewsIndex = 1;
          currentIndex = (currentIndex + 1) % totalCategories;
        }
        switchToNextCategory();
      }
    );
  };

  // 각 카테고리에 클릭 이벤트 추가
  categories.forEach((category, index) => {
    category.addEventListener("click", () => {
      currentIndex = index;
      currentNewsIndex = 1;
      switchToNextCategory();
    });
  });

  // 첫번째 카테고리에서 시작
  switchToNextCategory();
}
