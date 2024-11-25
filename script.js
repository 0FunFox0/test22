// 단어 항목 클릭 시 정의 보이기
document.querySelectorAll('.word-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
