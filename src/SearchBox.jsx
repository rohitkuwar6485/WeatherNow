import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox( { updateInfo } ) {
    let [city,setCity] = useState("");
    let [error,setError]= useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity:jsonResponse.main.humidity,
                feelIsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            //console.log(result);
            return result;
        }catch(err) {
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        }catch(err){
            setError(true);
        }
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Enter City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No Such place exits!!</p>}
            </form>
        </div>
    )
}