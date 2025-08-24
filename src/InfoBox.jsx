import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';          // ☀️ Sunny
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; // ⛈️ Storm
import AcUnitIcon from '@mui/icons-material/AcUnit';             // ❄️ Snow


export default function InfoBox({info}) {
    const HOT_URL = "https://tse1.mm.bing.net/th/id/OIP.51sIaZTDYEiU_-gz5-4b2QHaEU?pid=Api&P=0&h=180";
    const COLD_URL = "https://tse4.mm.bing.net/th/id/OIP.-paI_FeCLE5mqwuWB6lkGQHaFj?pid=Api&P=0&h=180"
    const RAIN_URL = "https://tse2.mm.bing.net/th/id/OIP.wTXDujNosRg74m2Wfw4rLgHaE7?pid=Api&P=0&h=180"


    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image= {info.humidity> 80 ? RAIN_URL: info.temp > 15  ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography 
                          gutterBottom 
                          variant='h5' 
                          component="div" 
                          className="cityTitle"
                        >
                            {info.city}&nbsp;{info.humidity> 80 ? <ThunderstormIcon/>: info.temp > 15  ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          className="InfoBoxDetails" 
                          component="div"
                        >
                            <p><strong>Weather:</strong> {info.weather}</p>
                            <p><strong>Temperature:</strong> {info.temp}°C</p>
                            <p><strong>Feels Like:</strong> {info.feelIsLike}°C</p>
                            <p><strong>Humidity:</strong> {info.humidity}%</p>
                            <p><strong>Max Temp:</strong> {info.tempMax}°C</p>
                            <p><strong>Min Temp:</strong> {info.tempMin}°C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelIsLike}°C.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
