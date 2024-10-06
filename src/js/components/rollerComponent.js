export function createRoller(rollerSelector, delay = 0) {
  const roller = document.querySelector(rollerSelector);
  const listItems = roller.querySelectorAll("li");
  let currentIndex = 0;
  let rollerInterval;

  if (listItems.length > 0) {
    listItems[0].classList.add("current");
    if (listItems.length > 1) {
      listItems[1].classList.add("next");
    }
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

  function pauseRolling() {
    clearInterval(rollerInterval);
  }

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
