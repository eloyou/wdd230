const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const modeButton = document.querySelector('.mode');
const body = document.querySelector('body');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('open');
})

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('🕶️')) {

        body.style.background = "#000";
        body.style.color = "#fff";
        
        modeButton.textContent = "🔆";
    } else {
        modeButton.textContent = "🕶️"
        body.style.background = "#fff";
        body.style.color = "#000";
    }
})

