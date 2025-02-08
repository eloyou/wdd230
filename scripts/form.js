const pass = document.querySelector('#password');
const repeatPass = document.querySelector('#repeatPassword');
const message = document.querySelector('#message');

repeatPass.addEventListener("focusout", checkSame);

function checkSame() {
    if (pass.value !== repeatPass.value) {
        message.textContent = "Password do not match!";
        message.style.display = "block";
        repeatPass.style.backgroundColor = "#fff0f3";
        repeatPass.value = "";
        repeatPass.focus();

    } else {
        message.style.display = "none";
		repeatPass.style.backgroundColor = "#fff";
		repeatPass.style.color = "#000";
    }
    
}

const range = document.querySelector('#rating');
const rangeValue = document.querySelector('#rangevalue');

range.addEventListener('change', () => {
    rangeValue.textContent = range.value;
})