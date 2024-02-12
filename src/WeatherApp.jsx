import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        // city:"Delhi",
        // feelslike:24.84,
        // temp:24.84,
        // tempmin:25.04,
        // tempmax:25.05,
        // humidity:47,
        // weather:"haze",
        description1:"This App is using API of Open weather map"
    })

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{backgroundColor:""}}>
            <h1 style={{textAlign:"center"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            
        </div>
    )
}