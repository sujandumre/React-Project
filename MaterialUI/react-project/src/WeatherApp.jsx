import {useState} from 'react'
import InfoBox from "./InfoBox"
import SearchBox from './SearchBox'

export default function WeatherApp(){
  const [weatherInfo, setweatherInfo]=useState({
    city:"kathmandu",
    temp: 15,
    tempMin: 7.12,
    tempMax: 16.61,
    humidity: 61,
    feelslike: 15.04,
    pressure: 1015,
    weather: "clear sky",
});

  let updateInfo=(newInfo)=>{
    setweatherInfo(newInfo);
  };
  return(
    <div style={{textAlign:"center"}}>
      <h2>Weather App By Sujan</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}