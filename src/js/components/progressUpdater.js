/**
 * 프로그레스 바의 너비를 업데이트
 *
 * @param {HTMLElement} progressBar
 * @param {number} elapsedSeconds - 경과 시간 (s)
 * @param {number} duration - 총 지속 시간 (ms)
 */
export function updateProgressBar(progressBar, elapsedSeconds, duration) {
  const progressPercentage = (elapsedSeconds / (duration / 1000)) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

/**
 * 프로그레스 바 애니메이션 설정
 *
 * @param {HTMLElement} progressBar
 * @param {number} duration - 총 지속 시간 (ms)
 * @param {function} callback
 */
export function startProgressBarAnimation(progressBar, duration, callback) {
  let elapsedSeconds = 0;
  const updateInterval = 1000;

  const progressInterval = setInterval(() => {
    elapsedSeconds++;
    updateProgressBar(progressBar, elapsedSeconds, duration);

    if (elapsedSeconds >= duration / 1000) {
      clearInterval(progressInterval);
      if (callback) callback();
    }
  }, updateInterval);

  return progressInterval;
}
