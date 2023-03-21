import IconWeather from '../IconWeather';

const WheatherCurent = ({ currentWeatherData }) => {
  const { temp } = currentWeatherData;
  const tempС = Math.round(temp - 273.15);

  return (
    <div className="mt-20 flex items-center justify-center p-2">
      {temp && (
        <span className="text-7xl font-medium text-slate-50">{tempС}</span>
      )}
      <IconWeather
        currentWeatherData={currentWeatherData}
        classesStyle="ml-10 h-20 w-20"
      />
    </div>
  );
};

export default WheatherCurent;
