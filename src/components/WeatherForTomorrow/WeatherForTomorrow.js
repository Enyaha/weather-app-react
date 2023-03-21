import snow from './snow.png';

import WeatherForTomorrowItem from '../WeatherForTomorrowItem';

const WeatherForTomorrow = () => {
  return (
    <div className="m-1 mb-0 rounded-md bg-slate-50">
      <WeatherForTomorrowItem
        weekDay="Сегодня"
        data="22 сентября"
        image={snow}
      />
      <WeatherForTomorrowItem
        weekDay="Завтрв"
        data="23 сентября"
        image={snow}
      />
      <WeatherForTomorrowItem
        weekDay="Пятница"
        data="24 сентября"
        image={snow}
      />
      <WeatherForTomorrowItem
        weekDay="Суббота"
        data="25 сентября"
        image={snow}
      />
    </div>
  );
};

export default WeatherForTomorrow;
