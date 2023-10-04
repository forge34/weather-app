
class Weather {
     constructor() {
        if (this instanceof Weather) {
            throw Error('A static class cannot be instantiated.');
          }
     }

     static async getData(location){
        const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e2e50ecfecb04556a9f230751232909&&q=${location}`)
        const response = await data.json()
       console.log(response)
        return response

    }

    static Data(data){
        let temp_c = data.current.temp_c
        let wind_s = data.current.wind_kph
        let temp_f = data.current.temp_f

        return {
            temp_c,
            temp_f,
            wind_s
        }
    }
    
}

export {
    Weather
}