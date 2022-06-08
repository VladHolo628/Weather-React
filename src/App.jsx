import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchForm from './components/SearchForm/SearchForm'
import AppContent from './components/AppContent/AppContent'
import AddedLocations from './components/AddedLocations/AddedLocations'
import SelectedCity from './components/SelectedCity/SelectedCity'
let defaultCity = 'Aktobe'

const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

function App() {
  const [cityToSearch, setCityToSearch] = useState('')
  const [selectedCity, setSelectedCity] = useState({})

  useEffect(() => {
    if(localStorage.getItem('latest-city')) {
      setSelectedCity(JSON.parse(localStorage.getItem('latest-city')))
    } else {
      const url = `${serverUrl}?q=${defaultCity}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(response => response.json())
        .then(data => setSelectedCity(data))
    }
      
  },[])

  const submitHandler = (e) => {
    e.preventDefault()
    const url = `${serverUrl}?q=${cityToSearch}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => setSelectedCity(data))

      console.log("skadksalkjf")
      
  }

  const changeHandler = (e) => {
    const inputtedCity = e.currentTarget.value
    setCityToSearch(inputtedCity)
    
  }
  // if(typeof selectedCity.main === undefined) {
  //   return ''
  // } else {

    return (
      <div className='app'>
        <SearchForm changeHandler={changeHandler} submitHandler={submitHandler}/>
        <AppContent>
          <SelectedCity city={selectedCity}/>
          <AddedLocations/>
        </AppContent>
      </div>
     
    )
  

 

}

export default App
