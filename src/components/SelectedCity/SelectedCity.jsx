import Tabs from "../Tabs/Tabs"


function SelectedCity() {

    return (
        <div className="current-location">
            <div
              className="current-location__screen current-location__screen-1 current-location__screen--active now-tab"
            >
              <p className="current-location__temperature current-temperature">
                14&#176;
              </p>
              <img
                className="current-location__img"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Cloud"
              />
              <div className="current-location__city">
                <p className="current-location__city-name city-name">Aktobe</p>
                <div
                  className="current-location__city-icon current-location__city-icon--active"
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


            <div
              className="current-location__screen current-location__screen-2 details-tab"
            >
              <h4 className="details__title city-name">Aktobe</h4>
              <dl className="details__list">
                <div className="details__list-row">
                  <dt className="details__name details__name-temperature">
                    Temperature:
                  </dt>
                  <dd
                    className="details__data details__data-temperature current-temperature"
                  >
                    14&#176;
                  </dd>
                </div>
                <div className="details__list-row">
                  <dt className="details__name details__name-feelslike">
                    Feels like:
                  </dt>
                  <dd
                    className="details__data details__data-feelslike current-feelslike"
                  >
                    10&#176;
                  </dd>
                </div>
                <div className="details__list-row">
                  <dt className="details__name details__name-weather">Weather:</dt>
                  <dd
                    className="details__data details__data-weather current-weather"
                  >
                    Clouds
                  </dd>
                </div>
                <div className="details__list-row">
                  <dt className="details__name details__name-sunrise">Sunrise:</dt>
                  <dd className="details__data details__data-sunrise">03:21</dd>
                </div>
                <div className="details__list-row">
                  <dt className="details__name details__name-sunset">Sunset:</dt>
                  <dd className="details__data details__data-sunset">18:54</dd>
                </div>
              </dl>
            </div>


            <div
              className="current-location__screen current-location__screen-3 forecast-tab"
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


            <Tabs></Tabs>
        </div>
     
    )
   
  
  }
  
  export default SelectedCity