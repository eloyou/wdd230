const baseURL = "https://eloyou.github.io/wdd230/";
const linksURL = "https://eloyou.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data)
    displayLinks(data.weeks);
    
}

getLinks();

const links = document.querySelector('#links');
const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        const li = document.createElement('li');
        li.textContent = `${week.week} : `;
        
        week.links.forEach((link) => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            li.appendChild(a)

        })

        links.appendChild(li);



    });
}

const weatherApi = "https://api.openweathermap.org/data/2.5/weather?lat=13.91&lon=122.59&exclude=current&units=imperial&appid=8e78114a24e190ba0ad4da4458d591e8"

async function getWeather() {
    try {
        const response = await fetch(weatherApi);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayWeather(data);

        } else {
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.log(error);
    }
}

getWeather();

const weather = document.querySelector('#weather');
function displayWeather(data) {

    const paragraph = document.createElement('p');
    const icon = document.createElement('img');

    icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.alt = "Weather Icon";
    icon.width = '50';

    let desc = data.weather[0].description;
    let temp = `${data.main.temp}&deg;F`;

    paragraph.innerHTML = `${temp} - ${desc.toUpperCase()}`;
    paragraph.appendChild(icon);

    weather.appendChild(paragraph);

  }