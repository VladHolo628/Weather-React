function Tabs() {

    return (
        <div className="tabs">
        <ul className="tabs__list">
          <li className="tabs__item">
            <button className="tabs__button tabs__button--active">Now</button>
          </li>
          <li className="tabs__item">
            <button className="tabs__button">Details</button>
          </li>
          <li className="tabs__item">
            <button className="tabs__button">Forecast</button>
          </li>
        </ul>
      </div>
    )
   
  
  }
  
  export default Tabs