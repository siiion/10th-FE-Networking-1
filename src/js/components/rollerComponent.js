/**
 * 자동 롤링 배너 구현
 *
 * @param {String} rollerSelector - 롤링 적용할 ul 요소
 * @param {int} delay - 딜레이 시간
 */
export function createRoller(rollerSelector, delay = 0) {
  const roller = document.querySelector(rollerSelector);
  const listItems = roller.querySelectorAll("li");
  let currentIndex = 0;
  let rollerInterval;

  // 데이터가 존재하는 지 확인
  if (listItems.length >= 1) {
    listItems[0].classList.add("current");
    listItems[1].classList.add("next");
  } else {
    console.warn("데이터 없음");
    return;
  }

  function startRolling() {
    rollerInterval = setInterval(() => {
      const current = listItems[currentIndex];
      const nextIndex = (currentIndex + 1) % listItems.length;
      const next = listItems[nextIndex];

      if (current && next) {
        current.classList.remove("current");
        current.classList.add("prev");

        next.classList.add("current");
        next.classList.remove("next");

        const nextNextIndex = (nextIndex + 1) % listItems.length;
        const nextNext = listItems[nextNextIndex];

        listItems.forEach((item) => item.classList.remove("prev", "next"));

        nextNext.classList.add("next");

        currentIndex = nextIndex;
      } else {
        console.error("current 요소를 찾을 수 없습니다.");
      }
    }, 5000);
  }

  // 롤링 일시 정지
  function pauseRolling() {
    clearInterval(rollerInterval);
  }

  // 롤링 재개
  function resumeRolling() {
    startRolling();
  }

  roller.addEventListener("mouseenter", () => {
    pauseRolling();
    const currentItem = roller.querySelector(".current");
    if (currentItem) {
      const headline = currentItem.querySelector(".headline");
      if (headline) {
        headline.classList.add("underline");
      }
    }
  });

  roller.addEventListener("mouseleave", () => {
    resumeRolling();
    const currentItem = roller.querySelector(".current");
    if (currentItem) {
      const headline = currentItem.querySelector(".headline");
      if (headline) {
        headline.classList.remove("underline");
      }
    }
  });

  setTimeout(startRolling, delay);
}
