const API_KEY = '310a7fcf41da4fb4a2e47acc9b774b28';
const API_URL = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${API_KEY}`;

const fetchAPI = async () => {
  const paragraph = document.querySelector('p');
  const resultsHTML = document.querySelector('.results');

  try {
    const response = await fetch(API_URL);
    const responseJSON = await response.json();
    const results = responseJSON.results;

    results.forEach((element, index) => {
      if (index < 8) {
        resultsHTML.innerHTML += `<li> ${element.name} ${element.rating} ${element.tags.length}</li>`;
      }
    });
    paragraph.classList.add('hidden');
  } catch (err) {
    paragraph.innerHTML = "Something went wrong while api's loading";
  } finally {
    console.log("Hello there, General Kenobi, I'm always here brah");
  }
};

setTimeout(() => fetchAPI(), 2000);