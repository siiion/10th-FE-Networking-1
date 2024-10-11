/**
 * 그리드 보기 / 리스트 보기 선택 기능
 */
export function initViewerSwitcher() {
  const listViewIcon = document.querySelector(`#list-view-icon`);
  const gridViewIcon = document.querySelector(`#grid-view-icon`);

  listViewIcon.addEventListener("click", () => {
    listViewIcon.src = "src/assets/images/active-list-view.png";
    gridViewIcon.src = "src/assets/images/inactive-grid-view.png";
  });

  gridViewIcon.addEventListener("click", () => {
    listViewIcon.src = "src/assets/images/inactive-list-view.png";
    gridViewIcon.src = "src/assets/images/active-grid-view.png";
  });
}
