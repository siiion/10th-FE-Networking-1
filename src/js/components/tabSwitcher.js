/**
 * 전체 언론사 / 구독 언론사 탭 전환 기능
 */
export function initTabSwitcher() {
  const [firstTab, secondTab] = document.querySelectorAll(`#tab-btn span`);

  // 초기 설정 (전체 언론사 활성화)
  firstTab.classList.add("active-tab");
  secondTab.classList.add("inactive-tab");

  firstTab.addEventListener("click", () => {
    firstTab.classList.add("active-tab");
    firstTab.classList.remove("inactive-tab");
    secondTab.classList.add("inactive-tab");
    secondTab.classList.remove("active-tab");
  });

  secondTab.addEventListener("click", () => {
    secondTab.classList.add("active-tab");
    secondTab.classList.remove("inactive-tab");
    firstTab.classList.add("inactive-tab");
    firstTab.classList.remove("active-tab");
  });
}
