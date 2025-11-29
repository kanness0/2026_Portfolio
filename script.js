document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // 클릭한 아이템을 앞으로
            tabItems.forEach((i, idx) => {
                i.classList.remove('active');

                // z-index 재조정: 클릭한 아이템은 가장 위
                i.style.zIndex = 10 - idx;
            });

            item.classList.add('active');
            item.style.zIndex = 100; // 클릭한 아이템 맨앞
        });
    });
});