const ActualWeather = ({ time, image, degree }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-2">
      <span className="font-semibold leading-5 text-cyan-800">{time}</span>
      <img className="w-10" src={image} alt="icon" />
      <span className="text-xl font-medium leading-5 text-cyan-800">
        {degree}
      </span>
    </div>
  );
};

export default ActualWeather;
