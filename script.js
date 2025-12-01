const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', (e) => {
    e.preventDefault(); // 혹시 다른 이벤트가 막는 걸 방지
    window.location.href = 'index.html'; // 강제로 이동
});

