const url = "https://raw.githubusercontent.com/eloyou/wdd230/refs/heads/main/chamber/data/members.json";


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // testing only
        return data.companies
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch().then(data => {
    
    let randomSet = new Set()

    while (randomSet.size != 3) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomObject = data[randomIndex];
        if (randomObject.membership === "Gold" || randomObject.membership === "Silver") {
            randomSet.add(randomObject);
        } else {
            continue;
        }
        
        

    }


    randomSet.forEach(spot => {
        const spotCard = document.createElement('div');
        const company = document.createElement('h3');
        const companyImg = document.createElement('img');
        const level = document.createElement('p');
        const desc = document.createElement('p');
        const website = document.createElement('a');

        company.textContent = spot.name;
        companyImg.src = spot.image;
        companyImg.alt = spot.name;
        level.textContent = `Membership: ${spot.membership}`;
        website.textContent = spot.website;
        website.href = spot.website;
        desc.textContent = spot.info;

        spotCard.appendChild(company);
        spotCard.appendChild(companyImg);
        spotCard.appendChild(desc);
        spotCard.appendChild(website);
        spotCard.appendChild(level);

        document.querySelector('.spot-wrapper').appendChild(spotCard);

        
    });
    

    
});