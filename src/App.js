import React, { useState } from 'react'
import {fetchWeather} from './api/fetchWeather'
import './App.css'

const App = () =>{

const [query,setQuery] = useState('')
const [weather,setWeather] = useState('')

const search= async(e)=>{
    if(e.key==='Enter'){
        const data= await fetchWeather(query)
        setWeather(data)
        setQuery('')
        console.log(weather);
    }
}

    return (
        <>
        <div className='container'>
            <input
                type='text'
                className='search'            
                placeholder='Type City name here...'
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
                onKeyPress={search}
            />
            <br/>
            {weather.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <span>&nbsp;( {weather.sys.country} )</span>
                    </h2>
                    <h1 className='city-temp' style={{fontSize:'50px',marginTop:'-10px'}} >
                        <span>{Math.round(weather.main.temp)}</span>
                        <sup style={{color:'#6f9eaf'}}>&deg;C</sup>
                    </h1>
                    <div className='info'>
                        <img className="city-icon" style={{marginTop:'-30px'}} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                         <p style={{color:'#008891'}}>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}

        </div>
        </>
    )
}

export default App