const NASA_KEY = 'DEMO_KEY';

async function loadAPOD() {
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`);
  const data = await res.json();
  document.getElementById('apod-content').innerHTML = `
    <h3>${data.title}</h3>
    <img src="${data.url}" alt="${data.title}" style="max-width:100%">
    <p>${data.explanation}</p>
  `;
}

async function loadISS() {
  const res = await fetch('http://api.open-notify.org/iss-now.json');
  const data = await res.json();
  const { latitude, longitude } = data.iss_position;
  document.getElementById('iss-map').innerHTML =
    `<p>Latitude: ${latitude} | Longitude: ${longitude}</p>`;
}

loadAPOD();
loadISS();
setInterval(loadISS, 5000);
