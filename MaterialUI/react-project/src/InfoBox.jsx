import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';


export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL="https://images.unsplash.com/photo-1508233620467-f79f1e317a05?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

     const RAIN_URL="https://media.istockphoto.com/id/1079673712/photo/enjoying-rain-stock-image.jpg?s=2048x2048&w=is&k=20&c=1_L4b54IYeAUnzFxNsZ-1VgMYfmpjkN0cVVVPkkoaT8=";

       const COLD_URL="https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
  
  return (
    <div className="InfoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={
          info.humidity >80 ?
          RAIN_URL: 
          info.temp>15 ?
          HOT_URL: COLD_URL
        } title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
            info.humudity>80 ?
          <ThunderstormIcon/>: 
          info.temp>15 ?
          <SunnyIcon/>: <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>TempMin={info.tempMin}</p>
            <p>TempMax={info.tempMax}</p>
            <p>Pressure={info.pressure}</p>
            <p>The Weather can be described <i>{info.weather}</i> feels Like {info.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
