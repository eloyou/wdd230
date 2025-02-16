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
  displayResults(data)
});

const directory = document.querySelector(".directory-wrapper");

function displayResults(companies) {

    companies.forEach((company) => {

        const card = document.createElement('div');
        const h2 = document.createElement('h2');
        const link = document.createElement('a');
        const tel = document.createElement('a');
        const paragraph = document.createElement('p');
        const img = document.createElement('img');

        h2.textContent = `${company.name}`;
        paragraph.textContent = `${company.info}`;
        link.href = `https://${company.website}`;
        link.textContent = `${company.website}`;
        tel.href = `tel:+${company.phone}`;
        tel.textContent = `+${company.phone}`;
        img.src = `${company.image}`;
        img.alt = `${company.name} logo`;

        card.appendChild(h2);
        card.appendChild(paragraph);
        card.appendChild(img);
        card.appendChild(link);
        card.appendChild(tel);

        directory.appendChild(card);



    });


}


