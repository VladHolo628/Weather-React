import {format, fromUnixTime} from 'date-fns';
import { useState } from 'react';

function LocationScreen({screen,city}) {
  const [isActive, setActive] = useState('')
  const handleLike = () => {
    isActive === ''? setActive('--active'): setActive('')
  }
        
    if(city.main === undefined && isNaN(city)) console.log(22)
    else {
      const weatherData = {
        name: city.name,
        currentTemperature:Math.floor(city.main.temp),
        feelsLike:Math.floor(city.main.feels_like),
        weatherDescription:city.weather[0].main,
        sunset: format(fromUnixTime(city.sys.sunset), 'h:mm')  ,
        sunrise:format(fromUnixTime(city.sys.sunrise), 'h:mm') ,
      }

      const now = <div
      className="current-location__screen current-location__screen-1 current-location__screen--active now-tab"
    >
      <p className="current-location__temperature current-temperature">
        {`${Math.floor(city.main.temp)}°`}
      </p>
      <img
        className="current-location__img"
        src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
        alt="Cloud"
      />
      <div className="current-location__city">
        <p className="current-location__city-name city-name">{weatherData.name}</p>
        <div onClick={handleLike}
          className={`current-location__city-icon current-location__city-icon${isActive}`}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.54"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  
      const details =  <div
      className="current-location__screen current-location__screen-2 details-tab current-location__screen--active"
    >
      <h4 className="details__title city-name">{weatherData.name}</h4>
      <dl className="details__list">
        <div className="details__list-row">
          <dt className="details__name details__name-temperature">
            Temperature:
          </dt>
          <dd
            className="details__data details__data-temperature current-temperature"
          >
            {`${weatherData.currentTemperature}°`}
          </dd>
        </div>
        <div className="details__list-row">
          <dt className="details__name details__name-feelslike">
            Feels like:
          </dt>
          <dd
            className="details__data details__data-feelslike current-feelslike"
          >
            {`${weatherData.feelsLike}°`}
          </dd>
        </div>
        <div className="details__list-row">
          <dt className="details__name details__name-weather">Weather:</dt>
          <dd
            className="details__data details__data-weather current-weather"
          >
            {`${weatherData.weatherDescription}`}
          </dd>
        </div>
        <div className="details__list-row">
          <dt className="details__name details__name-sunrise">Sunrise:</dt>
          <dd className="details__data details__data-sunrise">{weatherData.sunrise}</dd>
        </div>
        <div className="details__list-row">
          <dt className="details__name details__name-sunset">Sunset:</dt>
          <dd className="details__data details__data-sunset">{weatherData.sunset}</dd>
        </div>
      </dl>
    </div>
  
      const forecast =  <div
      className="current-location__screen current-location__screen-3 forecast-tab current-location__screen--active"
    >
      <h4 className="details__title forecast__title city-name">Aktobe</h4>
      <div className="forecast">
        <div className="forecast__item">
          <div className="forecast__item-row">
            <p className="forecast__item-date">17 May</p>
            <p className="forecast__item-time">12:00</p>
          </div>
          <div className="forecast__item-row">
            <div className="forecast__item-data">
              <p className="forecast__item-temperature">
                Temperature: 13&#176;
              </p>
              <p className="forecast__item-feelslike">
                Feels like: 10&#176;
              </p>
            </div>
            <div className="forecast__item-icon">
              <img
                className="forecast__item-icon-img"
                src="./img/rain-icon.svg"
                alt=""
              />
              <p className="forecast__item-icon-descr">Rain</p>
            </div>
          </div>
        </div>
        <div className="forecast__item">
          <div className="forecast__item-row">
            <p className="forecast__item-date">17 May</p>
            <p className="forecast__item-time">12:00</p>
          </div>
          <div className="forecast__item-row">
            <div className="forecast__item-data">
              <p className="forecast__item-temperature">
                Temperature: 13&#176;
              </p>
              <p className="forecast__item-feelslike">
                Feels like: 10&#176;
              </p>
            </div>
            <div className="forecast__item-icon">
              <img
                className="forecast__item-icon-img"
                src="./img/rain-icon.svg"
                alt=""
              />
              <p className="forecast__item-icon-descr">Rain</p>
            </div>
          </div>
        </div>
        <div className="forecast__item">
          <div className="forecast__item-row">
            <p className="forecast__item-date">17 May</p>
            <p className="forecast__item-time">12:00</p>
          </div>
          <div className="forecast__item-row">
            <div className="forecast__item-data">
              <p className="forecast__item-temperature">
                Temperature: 13&#176;
              </p>
              <p className="forecast__item-feelslike">
                Feels like: 10&#176;
              </p>
            </div>
            <div className="forecast__item-icon">
              <img
                className="forecast__item-icon-img"
                src="./img/rain-icon.svg"
                alt=""
              />
              <p className="forecast__item-icon-descr">Rain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
      switch(screen) {
          case 'Now':
              return now
              break;
          case 'Details':
              return details
              break;
          case 'Forecast':
              return forecast
              break;
  }
    }
    // }


  
   
  
  }
  
  export default LocationScreen