/**
 * 자동 롤링 영역에 json 데이터 불러오기
 *
 * @param {string} key - json 데이터의 키
 * @returns {Array} - 가져온 뉴스 데이터 배열
 * @throws {Error} - 네트워크 에러 발생 시 에러 처리
 */
export async function fetchRollerData(key) {
  try {
    const response = await fetch("/src/assets/data/rollerData.json");
    if (!response.ok) {
      throw new Error("네트워크 응답에 문제가 있습니다.");
    }

    const data = await response.json();
    return data[key];
  } catch (error) {
    console.error("데이터를 불러오는 중 문제가 발생했습니다:", error);
    throw error; // 에러를 다시 던져 상위에서 처리할 수 있도록
  }
}
