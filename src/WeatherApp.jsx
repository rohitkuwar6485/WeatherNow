import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css'
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setwWatherInfo] = useState({
        city:"Delhi",
        weather: "Overcast Clouds",
        temp: 29.94,
        feelIsLike: 33.33,
        humidity: 63,
        tempMax: 29.94,
        tempMin: 29.94,
    });

    let updateInfo = (newInfo) =>{
        setwWatherInfo(newInfo)
    }

    return (
    <div className="AppContainer">
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  );
}