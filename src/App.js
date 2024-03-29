import React, { useState } from 'react'
import './App.css'
import DateBuilder from './Components/DateBuilder'
import SearchBar from './Components/SearchBar'
import Location from './Components/Location'
import WeatherDisplay from './Components/WeatherDisplay'

const App = () => {
  
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: 'http://api.openweathermap.org/data/2.5/'
  }

  const search = (evt) => {
      if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(resp => resp.json())
            .then(weatherData => { 
            setWeather(weatherData)
            setQuery("")
          })
      }
  }

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const getIcon = iconCode => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  const imgDisplay = weather.main && Number(weather.weather[0].icon.replace(/[^\d]/g, ''))

  return (
    <main 
    className={ weather.main && imgDisplay > 7 ? "weather-bad" : imgDisplay > 3 ? "weather-cloud" : 'app' } 
      >
        <div className='container'>
          <SearchBar 
            loadWeather={search} 
            handleChange={handleChange}
            value={query} /> 
          <DateBuilder />
          {( weather.main && 
          <div>
              <Location 
                city={weather.name} 
                country={weather.sys.country} />
              <WeatherDisplay 
                temp={Math.round(weather.main.temp)} 
                weather={weather.weather[0].main} 
                src={getIcon(weather.weather[0].icon)} />
          </div> )}
        </div>
    </main>
  )
}

export default App