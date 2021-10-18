import "./ResultsCardComponent.css";
import {useState} from "react";

const ResultsCardComponent = ({cityProp}) => {

  const [city, setCity] = useState("");
  const [day, setDay] = useState("");
  const [temperature, setTemperature] = useState("");
  const [outlook, setOutlook] = useState("");
  const [lowestAndHighestTemp, setLowestAndHighestTemp] = useState("");

  const api = {
    key: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const getWeatherData = () => {
    if(cityProp.length > 0){
      (async () => {
        let weatherData;
        try {
          const response = await fetch(`${api.base}weather?q=${cityProp}&units=metric&APPID=${api.key}`);
          weatherData = (await response.json());
          handleData(weatherData);
        }catch (errors){
          console.log(`No such City/Town. Please enter the correct name.`);
        }
      })();
    }
  };

  const handleData = (weatherData) => {
    setCity(`${weatherData.name}, ${weatherData.sys.country}`);
    setDay(formatDate());
    setTemperature(`${Math.round(weatherData.main.temp)}°C `);
    setOutlook(`${weatherData.weather[0].main}`);
    setLowestAndHighestTemp(`${weatherData.main.temp_min}°C / ${weatherData.main.temp_max}°C`);
  };

  const formatDate = () => {
    let months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let jsDate = new Date();

    let day = days[jsDate.getDay()];
    let date = jsDate.getDate();
    let month = months[jsDate.getMonth()];
    let year = jsDate.getFullYear();
    
    return `${day} ${date} ${month} ${year}`;

  };

  getWeatherData();


  return (
    cityProp.length > 0 ? 
    <section className="results-card">
      <div className="card mt-3 border-2" style={{width: 18 + "rem"}}>
        <div className="card-body">
          <h2 className="card-title">Results</h2>
          <ol>
            <li><span className="fw-bold">City: </span><span>{city}</span></li>
            <li><span className="fw-bold">Day: </span><span>{day}</span></li>
            <li><span className="fw-bold">Outlook: </span><span>{outlook}</span></li>
            <li><span className="fw-bold">Temperature: </span><span>{temperature}</span></li>
            <li><span className="fw-bold">Low-Hi Temp: </span><span>{lowestAndHighestTemp}</span></li>
          </ol>
        </div>
      </div>
    </section>
    :
    null
  )
}

export default ResultsCardComponent
