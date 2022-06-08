
// import LocationScreen from "../LocationScreen/LocationScreen"
import Tabs from "../Tabs/Tabs"


function SelectedCity({city}) {


    return (
        <div className="current-location">

            <Tabs city={city}></Tabs>
        </div>
     
    )
   
  
  }
  
  export default SelectedCity