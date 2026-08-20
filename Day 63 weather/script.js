// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

// ---


async function getWeather(city){

try{
let apikey = `c9f66955005849e6b1ad9da5e505f70f`

let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)

if(!raw.ok){
 throw new Error("somthing went wrong")
}

//  .then( raw=>raw.json())
//  .then(result => {
//     console.log(result)
//  })

let realdata = await raw.json();

console.log(realdata.main.temp_min);

}catch(err){
   console.log(err.message)
}
 
}
getWeather("delhi")