const hamburgerMenu = document.querySelector('.nav-button');
const navigation = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    navigation.classList.toggle('open');
})