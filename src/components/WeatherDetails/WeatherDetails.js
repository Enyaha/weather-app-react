import snow from './snow.png';
import wind from './wind.png';
import barometer from './barometer.png';
import moisture from './moisture.png';

import ItemDetails from '../ItemDetails';
import ActualWeather from '../ActualWeather';

const WeatherDetails = ({ currentWeatherData }) => {
  const { windSpeed, pressure, humidity } = currentWeatherData;

  const windData = Math.round(windSpeed);
  const pressureData = Math.round(pressure * 0.750064); // 1 Hectopascal is equal to 0.750064 millimeters of mercury
  const humidityData = Math.round(humidity);

  return (
    <div className="mt-12 flex justify-between gap-1">
      <div className="ml-1 flex w-2/5 flex-col justify-between gap-2 rounded-md bg-slate-50 p-4">
        <ItemDetails image={wind} elementData={windData} text="м/с" />
        <ItemDetails
          image={barometer}
          elementData={pressureData}
          text="мм рт.ст."
        />
        <ItemDetails image={moisture} elementData={humidityData} text="%" />
      </div>

      <div className="mr-1 flex w-3/5 justify-between rounded-md bg-slate-50 p-4">
        <ActualWeather time="18:00" image={snow} degree="-9" />
        <ActualWeather time="19:00" image={snow} degree="-10" />
        <ActualWeather time="20:00" image={snow} degree="-11" />
        <ActualWeather time="21:00" image={snow} degree="-11" />
      </div>
    </div>
  );
};

export default WeatherDetails;
