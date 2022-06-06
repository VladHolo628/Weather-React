import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchForm from './components/SearchForm/SearchForm'
import AppContent from './components/AppContent/AppContent'
import AddedLocations from './components/AddedLocations/AddedLocations'
import SelectedCity from './components/SelectedCity/SelectedCity'
import Tabs from './components/Tabs/Tabs'

function App() {

  return (
    <div className='app'>
      <SearchForm/>
      <AppContent>
        <SelectedCity/>
        <AddedLocations/>
      </AppContent>
    </div>
   
  )
 

}

export default App
