export function initViewerSwitcher() {
  const listViewIcon = document.querySelector(`#list-view-icon`);
  const gridViewIcon = document.querySelector(`#grid-view-icon`);

  // 초기 설정 (그리드 뷰 활성화)
  listViewIcon.src = "src/assets/images/inactive-list-view.png";
  gridViewIcon.src = "src/assets/images/active-grid-view.png";

  listViewIcon.addEventListener("click", () => {
    listViewIcon.src = "src/assets/images/active-list-view.png";
    gridViewIcon.src = "src/assets/images/inactive-grid-view.png";
  });

  gridViewIcon.addEventListener("click", () => {
    listViewIcon.src = "src/assets/images/inactive-list-view.png";
    gridViewIcon.src = "src/assets/images/active-grid-view.png";
  });
}
