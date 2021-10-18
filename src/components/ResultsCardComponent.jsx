/* I import this component's style
  * I imported the useState hook from react. 
  * I created various state variables that will hold various data about the weather. I initialized them with an empty string.
*/
import "./ResultsCardComponent.css";
import {useState} from "react";

const ResultsCardComponent = ({cityProp}) => {

  const [city, setCity] = useState("");
  const [day, setDay] = useState("");
  const [temperature, setTemperature] = useState("");
  const [outlook, setOutlook] = useState("");
  const [lowestAndHighestTemp, setLowestAndHighestTemp] = useState("");

  /* I created an object that stores the api key and base URL of the weather APi */
  const api = {
    key: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
  }

  /* I created a function that holds an asynchronous function which fetches weather data of the city/town inputted by the user.
    * Once the weatherData has been fetched the function handleData is called.
    * I used the try catch block to handle request errors.
  */
  const getWeatherData = () => {
    if(cityProp.length > 1){
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

  /* Using the weatherData parameter the handleData function extracts and sets the:
    * City name and country name 
    * Temperature
    * Outlook
    * Lowest and highest temperature
  It also sets the data using the formatDate function.
  */
  const handleData = (weatherData) => {
    setCity(`${weatherData.name}, ${weatherData.sys.country}`);
    setDay(formatDate());
    setTemperature(`${Math.round(weatherData.main.temp)}°C `);
    setOutlook(`${weatherData.weather[0].main}`);
    setLowestAndHighestTemp(`${weatherData.main.temp_min}°C / ${weatherData.main.temp_max}°C`);
  };

  /* The formatDate function returns the day, date, month and year using the JS date function and the two arrays of months and days. */
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

  /* I initialize the getWeatherData function here whenever the app is rendered. */
  getWeatherData();

  /* Below is the JSX of the results section of the weather application.
    * It is only rendered when the user has typed in two character's in the input form this is achieved by checking the length of the cityProp using a ternary operator. 
  */
  return (
    cityProp.length > 1 ? 
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
