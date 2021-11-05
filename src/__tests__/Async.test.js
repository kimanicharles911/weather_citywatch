/* I created an object that stores the api key and base URL of the weather APi */
const api = {
  key: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

/* I stored the city whose weather data I want to fetch*/
const city = "Nairobi";

describe("Async fetch tests", () => {
  it('fetch api test', async() => {
    const request = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    const response = await request.json();
    expect(response.sys.country).toBe("KE");
  });
});

/* 
I defined a describe block which is used to describe multiple  tests that belong to one group.
I define a test block using it. The first paramter of the test block is the test's description and the last parameter is a callback function that executes the test.
I fetch the wether data and store it in a variable called request.
I then convert the JSON in the request variable and store it in the response variable.
I then use the expect assertion to check the country code of the city returned whether it matches it's country's code using the the toBe matcher..
*/