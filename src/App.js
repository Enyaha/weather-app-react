import { useState, useEffect } from 'react';

import CityInfo from './components/CityInfo';
import ChangeCity from './components/ChangeCity';
import CurentWheather from './components/WheatherСurrent';
import WeatherDetails from './components/WeatherDetails';
import WeatherForTomorrow from './components/WeatherForTomorrow';

import { getResource } from './service/weatherService';

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState({
    temp: null,
    pressure: null,
    humidity: null,
    windSpeed: null,
    windDeg: null,
    clouds: null,
    icon: null,
    weatherId: null,
  });

  useEffect(() => {
    getResource('56.018', '92.8672').then((data) => {
      setCurrentWeatherData({
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
        clouds: data.clouds.all,
        icon: data.weather[0].icon,
        weatherId: data.weather[0].id,
      });
    });
  }, []);

  console.log(currentWeatherData);

  return (
    <div className="mx-auto mt-4 h-full max-w-md rounded-lg bg-gradient-to-t from-slate-900 via-sky-900 to-cyan-600 pb-1">
      <CityInfo />
      <CurentWheather currentWeatherData={currentWeatherData} />
      <WeatherDetails currentWeatherData={currentWeatherData} />
      <WeatherForTomorrow />
      <ChangeCity />
    </div>
  );
}

export default App;
