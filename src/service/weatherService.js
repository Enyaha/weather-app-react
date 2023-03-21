const _apiKey = 'd435db17f9b3ffdc1bcc8d3710d7f5cf';
const _apiURL = 'https://api.openweathermap.org/data/2.5/weather?';

const getResource = async (lat, lon) => {
  const res = await fetch(`${_apiURL}lat=${lat}&lon=${lon}&appid=${_apiKey}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${res}, received ${res.status}`);
  }
  return await res.json();
};

export { getResource };
