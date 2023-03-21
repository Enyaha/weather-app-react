const WeatherForTomorrowItem = ({ image, weekDay, data }) => {
  return (
    <div className="flex justify-between p-4">
      <div className="leading-5 text-cyan-800">
        <div>{weekDay}</div>
        <div>{data}</div>
      </div>
      <div className="flex w-1/3 items-center justify-between">
        <img className="w-10" src={image} alt="icon" />
        <span className="text-xl font-medium leading-5 text-cyan-800">-9</span>
        <span className="text-xl font-medium leading-5 text-cyan-800">-15</span>
      </div>
    </div>
  );
};

export default WeatherForTomorrowItem;
