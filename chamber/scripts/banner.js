const banner = document.querySelector('.banner');
const bannerClose = document.querySelector('.close');

bannerClose.addEventListener('click', () => {
    banner.style.display = 'none';
})

const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
    banner.style.display = 'flex';
}
