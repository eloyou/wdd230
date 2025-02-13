const hamburgerMenu = document.querySelector('.nav-button');
const navigation = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    navigation.classList.toggle('open');
})

const visits = document.querySelector('.visits-info');

const dateToday = new Date().toLocaleDateString();

const getDate = localStorage.getItem('date-now');

if (getDate){

    const startDate = new Date(getDate);
    const endDate = new Date(dateToday);

    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);

    if (getDate != dateToday) {
        visits.textContent = "You last visited " + differenceInDays + " days ago"
    } else {
        visits.textContent = "Back so soon! Awesome!";
    }

   
    

} else {

    localStorage.setItem('date-now', dateToday);
    visits.textContent = "Welcome! Let us know if you have any questions.";

}

const timestamp = document.querySelector('#timestamp');

timestamp.value = new Date().toISOString();










