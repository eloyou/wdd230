
setYear = document.querySelector(".year");
currentDate = document.querySelector(".currentDate");

date = new Date()
setYear.innerText = currentYear = date.getFullYear();
currentDate.innerText = date.toLocaleDateString()
