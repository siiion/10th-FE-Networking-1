export function createRoller(rollerSelector) {
  const newsContainer = document.querySelector(rollerSelector).parentElement;
  const roller = newsContainer.querySelector("ul");
  const rollerItems = roller.querySelectorAll("li");

  const height = newsContainer.offsetHeight;
  const num = rollerItems.length;
  const max = height * num;
  let move = 0;
  let currentRoller = roller;

  let animationTimeout = null;
  let isPaused = false;

  // 초기 설정
  roller.style.transition = "none";
  roller.style.top = "0";

  // 롤러 복제
  function cloneRoller() {
    const clone = currentRoller.cloneNode(true);
    clone.style.top = "0px";
    newsContainer.appendChild(clone);
    console.log(`[${rollerSelector}] 롤러 복제`);
    return clone;
  }

  // 애니메이션 함수 (재귀적으로 호출)
  function animateRoller() {
    if (isPaused) return;

    move += height;
    console.log(
      `[${rollerSelector}] 현재 move: ${move}, top: ${currentRoller.style.top}`
    );

    // 원본 롤러가 모두 올라갔을 때
    if (move >= max) {
      currentRoller.style.transition = "none";
      currentRoller.style.top = "0";
      move = 0;

      console.log(`[${rollerSelector}] 롤러가 최대로 올라가서 초기화`);

      // 원본 롤러 삭제 및 복제된 롤러로 교체
      if (newsContainer.contains(currentRoller)) {
        newsContainer.removeChild(currentRoller);
        console.log(`[${rollerSelector}] 원본 롤러 삭제`);
      }

      currentRoller = cloneRoller();
    } else {
      currentRoller.style.transition = "top 0.6s";
      currentRoller.style.top = `-${move}px`;
    }

    // 일정한 5초 간격으로 다시 애니메이션 호출
    animationTimeout = setTimeout(animateRoller, 5000);
  }

  // 애니메이션 시작 함수
  function startAnimation() {
    isPaused = false;
    if (!animationTimeout) {
      animateRoller();
    }
  }

  // 애니메이션 일시 정지 함수
  function pauseAnimation() {
    isPaused = true;
    clearTimeout(animationTimeout); // 중복 실행 방지
    animationTimeout = null;
  }

  // 애니메이션 재개 함수
  function resumeAnimation() {
    if (isPaused) {
      isPaused = false;

      console.log(`[${rollerSelector}] 애니메이션 재개`);
      startAnimation(); // 정확히 5초 간격으로 다시 애니메이션 시작
    }
  }

  // 첫 번째 애니메이션 시작
  startAnimation();

  // 마우스 호버 이벤트
  rollerItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      console.log(`[${rollerSelector}] mouseenter`);
      pauseAnimation(); // 마우스 호버 시 애니메이션 일시 정지
      item.classList.add("underline");
    });

    item.addEventListener("mouseleave", () => {
      console.log(`[${rollerSelector}] mouseleave`);
      resumeAnimation(); // 마우스가 벗어나면 애니메이션 재개
      item.classList.remove("underline");
    });
  });
}
