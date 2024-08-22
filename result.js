document.addEventListener('DOMContentLoaded', function () {
  // 로컬스토리지에서 'mbti_result' 값을 가져옵니다.
  const mbtiResult = localStorage.getItem('mbti_result');

  // id가 'result'인 요소를 가져옵니다.
  const resultElement = document.getElementById('result');

  // id가 'restart-button'인 요소를 가져옵니다.
  const restartButton = document.getElementById('restart-button');

  // 'mbti_result' 값이 존재하는지 확인합니다.
  if (mbtiResult) {
    // 값이 있다면 "~~~~입니다!"로 표시합니다.
    resultElement.textContent = `${mbtiResult}입니다!`;
  } else {
    // 값이 없다면 "아직 테스트를 진행하지 않았습니다!"로 표시합니다.
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    // 버튼 텍스트를 "테스트 하러 가기"로 변경합니다.
    restartButton.textContent = '테스트 하러 가기';
  }
});
