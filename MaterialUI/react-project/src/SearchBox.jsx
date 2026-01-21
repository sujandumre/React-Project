import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';

export default function SearchBox({updateInfo}){
  let [city, setCity]=useState("");

const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="e427db670dedaf071e3809278f014fb4";
let  getWeatherInfo= async()=>{
  if (!city) return null;
  try{
  let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
 let jsonResponse=await response.json();
// console.log(jsonResponse);
 let result={
  city:city,
  temp:jsonResponse.main.temp,
  tempMin:jsonResponse.main.temp_min,
  tempMax:jsonResponse.main.temp_max,
  humidity:jsonResponse.main.humidity,
  feelslike:jsonResponse.main.feels_like,
  pressure:jsonResponse.main.pressure,
  weather:jsonResponse.weather[0].description,
 };
 return result;
}catch(err){
  console.log(err);
  return null;
}
};

  let handleChange=(event)=>{
    setCity(event.target.value);
  };

  let handleSubmit= async (event)=>{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo=await getWeatherInfo();
    updateInfo(newInfo);
  };
  

  return(
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
       <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city}/>
       <br />
        <Button variant="contained" type="submit" >Search
      </Button>
      </form>
    </div>
  );
}