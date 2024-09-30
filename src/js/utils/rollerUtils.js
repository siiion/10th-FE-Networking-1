export function createRoller(rollerSelector) {
  const newsContainer = document.querySelector(rollerSelector).parentElement;
  const roller = newsContainer.querySelector("ul");
  const rollerItems = roller.querySelectorAll("li");

  const height = newsContainer.offsetHeight;
  const num = rollerItems.length;
  const max = height * num;
  let move = 0;
  let currentRoller = roller;

  let cloneRollerInterval;
  let newsRollerInterval;
  let lastPausedTime = 0;

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

  function newsRoller() {
    console.log(
      `[${rollerSelector}] newsRoller 함수 호출. 현재 move: ${move}, top: ${currentRoller.style.top}`
    );
    move += height;

    // 원본 롤러가 모두 올라갔을 때
    if (move >= max) {
      currentRoller.style.transition = "none";
      currentRoller.style.top = "0";
      move = 0;
      console.log(`[${rollerSelector}] 롤러가 최대로 올라가서 초기화`);

      // 원본 롤러 삭제
      if (newsContainer.contains(currentRoller)) {
        newsContainer.removeChild(currentRoller);
        console.log(`[${rollerSelector}] 원본 롤러 삭제`);
      }

      // 복제된 롤러 추가 및 롤링 시작
      currentRoller = cloneRoller();
      startRolling(currentRoller);
    } else {
      currentRoller.style.transition = "top 0.6s";
      currentRoller.style.top = `-${move}px`;
      console.log(
        `[${rollerSelector}] 새로운 top 값: ${currentRoller.style.top}`
      );
    }
  }

  // 새로운 롤러에서 롤링 시작
  function startRolling(clone) {
    let cloneMove = 0;

    function cloneRollerAnimation() {
      console.log(
        `[${rollerSelector}] cloneRollerAnimation 함수 호출. 현재 cloneMove: ${cloneMove}, clone의 top 값: ${clone.style.top}`
      );
      cloneMove += height;

      if (cloneMove >= max) {
        clone.style.transition = "none";
        clone.style.top = "0";
        cloneMove = 0;

        if (newsContainer.contains(clone)) {
          newsContainer.removeChild(clone);
          console.log(`[${rollerSelector}] 복제 롤러 삭제`);
        }
      } else {
        clone.style.transition = "top 0.6s";
        clone.style.top = `-${cloneMove}px`;
        console.log(`[${rollerSelector}] 새로운 top 값: ${clone.style.top}`);
      }
    }

    cloneRollerInterval = setInterval(cloneRollerAnimation, 5000);
  }

  // 원본 롤러에서 롤링 시작
  startRolling(roller);

  // 복제된 롤러가 롤링을 이어가도록
  newsRollerInterval = setInterval(newsRoller, 5000);

  // // 마우스 호버 이벤트
  // rollerItems.forEach((item) => {
  //   item.addEventListener("mouseenter", () => {
  //     console.log(`[${rollerSelector}] mouseenter`);
  //     clearInterval(newsRollerInterval);
  //     clearInterval(cloneRollerInterval);
  //     lastPausedTime = Date.now();
  //     item.classList.add("underline");
  //   });

  //   item.addEventListener("mouseleave", () => {
  //     const elapsedTime = Date.now() - lastPausedTime;
  //     const remainingTime = 5000 - (elapsedTime % 5000);

  //     console.log(
  //       `[${rollerSelector}] mouseleave. 남은 시간: ${remainingTime}ms`
  //     );

  //     setTimeout(() => {
  //       newsRollerInterval = setInterval(newsRoller, 5000);
  //       cloneRollerInterval = setInterval(() => {
  //         startRolling(currentRoller);
  //       }, 5000);
  //     }, remainingTime);

  //     item.classList.remove("underline");
  //   });
  // });

  const style = document.createElement("style");
  style.innerHTML = `
    .underline {
      text-decoration: underline;
    }
  `;
  document.head.appendChild(style);
}
