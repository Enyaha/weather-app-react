const IconWeather = ({ currentWeatherData, classesStyle }) => {
  const { icon } = currentWeatherData;

  return (
    <div>
      {icon && (
        <img
          className={classesStyle}
          src={require(`./i${icon}.png`)}
          alt="icon"
        />
      )}
    </div>
  );
};

export default IconWeather;
