/**
 * 프로그레스 바의 애니메이션
 *
 * @param {HTMLElement} progressBar
 * @param {number} duration
 * @param {function} callback
 * @returns {number}
 */
export function updateProgressBar(progressBar, duration, callback) {
  let elapsedSeconds = 0;
  const updateInterval = 1000; // 1초마다 업데이트

  const progressInterval = setInterval(() => {
    elapsedSeconds++;
    const progressPercentage = (elapsedSeconds / (duration / 1000)) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    if (elapsedSeconds >= duration / 1000) {
      clearInterval(progressInterval);
      if (callback) callback();
    }
  }, updateInterval);

  return progressInterval;
}
