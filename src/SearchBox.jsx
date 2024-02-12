import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "dbade14fa188797f1b40f0ab5300eb83";

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
        // console.log(jsonResponse);
            // let deg = <p>&deg;</p>
            let result = {
            // name:jsonResponse.main.name,
            city:city,
            temp: <p>Temperature : {jsonResponse.main.temp}&deg;C</p>,
            temp_max: <p>Maximum Temperature : {jsonResponse.main.temp_max}&deg;C</p>,
            temp_min:<p>Minimum Temperature : {jsonResponse.main.temp_min}&deg;C</p>,
            humidity:<p>Humidity : {jsonResponse.main.humidity}</p>,
            feelslike: <p>Feels Like : {jsonResponse.main.feels_like}&deg;C</p>,
            description: <p>Description : {jsonResponse.weather[0].description}</p>,   
        };
            console.log(result)
            return result;
        }   catch(err){
                throw err;
        }
        
    }
    

    let handleChange = (event)=>{
        setCity(event.target.value)
    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            setError(false)
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err){
            setError(true);
        }

        

    }


    return(
        <div className='SearchBox' >
            {/* <h3>Weather App</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required
                value={city}
                onChange={handleChange}

                />
                <br /> <br />
                <Button variant="contained" type="submit" 
                onSubmit={handleSubmit}
                >Search</Button>
                {error && <p style={{color:"red"}}>No such place exist</p>}
            </form>
        </div>
    )
}