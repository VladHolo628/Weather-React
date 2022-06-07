import { useState } from 'react'
import LocationScreen from '../LocationScreen/LocationScreen'

function Tabs() {
   const [currentTab, setCurrentTab] = useState('Now')


 let clickHandler = (e,tab) => {
    setCurrentTab(tab)
 }

 const buttons = ['Now','Details','Forecast']

    return (
      <>
        <LocationScreen screen={currentTab}></LocationScreen>
        <div className="tabs">
        <ul className="tabs__list">
          {buttons.map((button) => {
            const classes = button === currentTab?'tabs__button tabs__button--active':'tabs__button'
            return (
              <li className="tabs__item" >
                <button  onClick={(e) => clickHandler(e,button)} className={classes}>{button}</button>
              </li>
            )

          })}
        </ul>
      </div>
      </>
    )
   
  
  }
  
  export default Tabs