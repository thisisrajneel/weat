import axios from 'axios'

const getWeatherData = async (city) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad3a0adba12c75648aeb3767fb0c4727`)
    console.log(response.data);
}

if(Deno.args.length == 0) {
    console.log('enter a city name');
    
} else {
    getWeatherData(Deno.args[0])
}