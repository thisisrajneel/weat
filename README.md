# weat
small real time weather util

this project started as a way to test out [Deno](https://deno.com/) and what caught my eye was the compile feature that lets you create a binary depending on your OS with a single command.

this project uses the [OpenWeatherMap](https://openweathermap.org/) API to get current weather data based on city names. it uses the 2.5 version that's deprecated.
yes, i have left my API key exposed, because i don't care, go nuts.

## Pre-requisites
have node and npm installed on your machine

## Installation and Setup
- clone the repo and navigate to the project
  ```
  git clone https://github.com/thisisrajneel/weat.git
  cd weat
  ```
- install the dependencies
  ```
  npm i
  ```
- [install](https://docs.deno.com/runtime/getting_started/installation/) deno
- compile the code into a binary
  ```
  deno compile --allow-all main.js
  ```
  
  the --allow-all flag give all permissions to the deno runtime
  > [!NOTE]  
  > alternatively you can use the `--allow-net` flag only

  you will see a binary named weat created inside the project (or weat.exe in case of windows)

  ### For Linux users
  move the binary to the bin folder to make it globally accesible
    ```
    sudo mv weat /bin
    ```

  ## Usage
  #### weat
  the command by itself will ask for a city as a command line argument
  ```
  $ weat
  enter a city name
  ```

  #### weat [city]
  outputs the current weather of the city in the terminal in json format
  ```
  $ weat delhi
  {
  coord: { lon: 77.2167, lat: 28.6667 },
  weather: [ { id: 721, main: "Haze", description: "haze", icon: "50d" } ],
  base: "stations",
  main: {
    temp: 302.2,
    feels_like: 303,
    temp_min: 302.2,
    temp_max: 302.2,
    pressure: 1012,
    humidity: 51,
    sea_level: 1012,
    grnd_level: 987
  },
  visibility: 3500,
  wind: { speed: 1.54, deg: 260 },
  clouds: { all: 20 },
  dt: 1728709263,
  sys: {
    type: 1,
    id: 9165,
    country: "IN",
    sunrise: 1728694203,
    sunset: 1728735887
  },
  timezone: 19800,
  id: 1273294,
  name: "Delhi",
  cod: 200
  }
  ```
  
  ## Further Scope
  adding a how-to for windows users
  
