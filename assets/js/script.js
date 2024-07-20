document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const iconPlus = item.querySelector('.plus');
        const iconMinus = item.querySelector('.minus');
        const text = item.querySelector('.itemTitleText');

        iconPlus.addEventListener('click', () => {
            iconPlus.classList.add('hidden');
            iconMinus.classList.remove('hidden');
            text.classList.remove('hidden');
        });

        iconMinus.addEventListener('click', () => {
            iconMinus.classList.add('hidden');
            iconPlus.classList.remove('hidden');
            text.classList.add('hidden');
        });
    });
});

