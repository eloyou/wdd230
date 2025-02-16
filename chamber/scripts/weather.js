
const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=13.9&lon=122.59&cnt=24&appid=8e78114a24e190ba0ad4da4458d591e8&units=imperial";

async function apiFetch() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        return data
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch().then(data => {

    const current = data.list[0];
    const curentIcon = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`
    const currentTemp = current.main.temp;
    const currentDesc = current.weather[0].description;

    document.querySelector('.w-icon').src = curentIcon;
    document.querySelector('.w-temp').textContent = currentTemp;
    document.querySelector('.w-description').textContent = currentDesc;



    const day1 = data.list[8]; 
    const day2 = data.list[16]; 
    const day3 = data.list[23];  

    const day1Temp = day1.main.temp;
    const day2Temp = day2.main.temp;
    const day3Temp = day3.main.temp;

    console.log(day1)

    document.querySelector('.dayOneForecast').innerHTML = `${formatDate(day1.dt)} <span>${day1Temp} °C</span>`;
    document.querySelector('.dayTwoForecast').innerHTML = `${formatDate(day2.dt)} <span>${day2Temp} °C</span>`;
    document.querySelector('.dayThreeForecast').innerHTML = `${formatDate(day3.dt)} <span>${day3Temp} °C</span>`;


})


function formatDate(timestamp) {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options); // Format the date
}